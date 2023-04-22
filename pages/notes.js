import { useAuth } from "@/Config/auth";
import { db } from "@/Config/firebase";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

export default function Notes() {
  const [noteInput, setNoteInput] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const { signOut, authUser, isLoading } = useAuth();
  const router = useRouter();

  const addNote = async () => {
    if (!noteInput || !noteTitle) {
      alert("Write something to add");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "notes"), {
        owner: authUser.uid,
        content: noteInput,
        title: noteTitle,
      });
      fetchNotes(authUser.uid);
      setNoteInput("");
      setNoteTitle("");
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  const fetchNotes = async (uid) => {
    try {
      const q = query(collection(db, "notes"), where("owner", "==", uid));
      const querySnapshot = await getDocs(q);

      let data = [];
      querySnapshot.forEach((note) => {
        data.push({ ...note.data(), id: note.id });
      });
      setNotes(data);
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  const deleteNote = async (docId) => {
    try {
      await deleteDoc(doc(db, "notes", docId));
      fetchNotes(authUser.uid);
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/login");
    }
    if (!!authUser) {
      fetchNotes(authUser.uid);
    }
  }, [authUser, isLoading]);

  return !authUser ? (
    <Loader />
  ) : (
    <>
      <Head>
        <title>Keeper.io</title>
        <link rel="icon" type="image/x-icon" href="./notebook.ico" />
      </Head>
      <main className="min-h-[100vh] h-fit w-[100vw] relative bg-[#F7F6F9]">
        <Navbar />
        <div className="py-5 px-2 md:w-[80vw] lg:w-[70vw] xl:w-[60vw] md:mx-auto mx-2 bg-[#027FFE] my-5 rounded-xl shadow-lg">
          <input type="text" placeholder="Add title" className="w-[100%] md:w-[30%] px-2 py-1 rounded-lg h-fit focus:outline-none text-sm font-semibold mb-1" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
          <motion.textarea type="text" className="resize-none w-[100%] px-2 py-1 rounded-lg h-fit focus:outline-none text-sm mt-1" placeholder="Add content" initial={{ height: 'fit-content' }} whileFocus={{ height: '200px' }} transition={{ duration: 0.3 }} value={noteInput} onChange={(e) => setNoteInput(e.target.value)} />
          <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className="bg-white text-black font-semibold flex items-center justify-center gap-1 mx-auto mt-3 px-10 py-2 rounded-lg text-sm shadow-md" onClick={addNote}><BsPencilSquare />Add Note</motion.button>
        </div>
        <div className="px-2 md:w-[80vw] lg:w-[70vw] xl:w-[60vw] mx-auto grid grid-cols-1 gap-2 lg:grid-cols-2 pb-10">
          {
            notes.length > 0 ?
              notes.map((note) => (
                <div className="h-fit w-[100%] bg-white rounded-xl shadow-lg border" key={note.id}>
                  <h3 className="py-2 px-5 font-semibold cursor-pointer">
                    {note.title}
                  </h3>
                  <div>
                    <p className="py-2 px-5 text-sm text-justify">
                      {note.content}
                    </p>
                    <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className="bg-gradient-to-r from-[#F00000] to-[#DC281E] shadow-md text-white font-semibold px-2 py-1 mb-2 rounded-lg mx-auto flex items-center justify-center gap-1" onClick={() => deleteNote(note.id)}><MdDelete />Delete</motion.button>
                  </div>
                </div>
              ))
              :
              <p className="bg-red-400 text-center rounded mx-auto col-span-2 px-2 py-2"><span className="font-semibold">N.B:</span> You do not have any notes, create one.</p>
          }
        </div>
      </main>
    </>
  )
}
