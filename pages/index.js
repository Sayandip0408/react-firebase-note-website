import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoLogInOutline } from "react-icons/io5"

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Keeper.io</title>
        <link rel="icon" type="image/x-icon" href="./notebook.ico" />
      </Head>
      <main>
        <nav className='w-[100vw] h-[60px] bg-white sticky top-0 flex items-center justify-between px-3 md:px-[10%] shadow-md'>
          <motion.div initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className='flex items-center justify-center gap-1 cursor-pointer'>
            <Image src={require('../public/noteIcon.png')} alt='logo' className='h-10 w-10' />
            <Link href="/" className='text-xl font-bold text-black'>Keeper.io</Link>
          </motion.div>
          <div className="flex items-center justify-center">
            <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className="bg-transparent text-black h-8 w-20 rounded text-sm font-semibold flex items-center justify-center gap-1 md:hidden" onClick={() => router.push("/login")}>Login <IoLogInOutline className="text-lg" /></motion.button>
            <Link href="/login" className="hidden md:block text-black">Log In</Link>
            <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className="border-2 border-green-600 h-10 w-28 rounded text-green-600 mx-2 hidden md:block" onClick={() => alert("Will be available soon!")}>Download</motion.button>
          </div>
        </nav>
        <div className="h-fit w-[calc(100vw-24px)] md:w-[calc(100vw-20%)] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[300px] md:h-[400px] p-2 md:p-5 flex flex-col items-start justify-around">
            <h1 className="text-4xl md:text-5xl font-medium">
              Get more from your note-taking app
            </h1>
            <p className="md:text-xl text-justify">
              Capture important ideas and information in ways that help you stay productive.
            </p>
            <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className="bg-green-600 text-white h-10 w-full rounded lg:w-[50%] font-semibold" onClick={() => router.push("/register")}>Sign up for free</motion.button>
          </div>
          <div className="h-[350px] md:h-[400px] flex items-center justify-center">
            <Image src={require("../public/laptop.png")} className="h-[300px] w-[310px] md:h-[350px] md:w-[380px] mx-auto" />
          </div>
        </div>
        <div className="w-[calc(100vw-24px)] md:w-[calc(100vw-20%)] mx-auto grid grid-cols-1">
          <div className="mt-5 mx-auto p-2 md:p-5 w-[100%]">
            <h1 className="text-3xl md:text-4xl font-medium mb-2">
              Safe and synced
            </h1>
            <p className="md:text-xl mt-2 text-justify">
              Tired of not having the right info handy when you need it? Evernote automatically saves notes online and syncs them to all your devices. With smart ways to save and access your notes, the information you need is always available when you need it.
            </p>
          </div>
          <div className="mt-5 mx-auto p-2 md:p-5 w-[100%]">
            <h1 className="text-3xl md:text-4xl font-medium mb-2">
              Take notes and take action
            </h1>
            <p className="md:text-xl mt-2 text-justify">
              Create tasks inside your notes to give your to-dos context, streamline your workflow, and get more done—faster. With smart ways to save and access your notes, the information you need is always available when you need it.
            </p>
          </div>
        </div>
        <div className="bg-[#E3F0F9] w-[calc(100vw-24px)] md:w-[calc(100vw-20%)] mx-auto p-3 flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between my-5 rounded">
          <p className="md:text-xl font-medium mt-2">Stay organized with a better note-taking app.</p>
          <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className="bg-green-600 text-white h-10 w-full rounded lg:w-[30%] font-semibold" onClick={() => router.push("/login")}>Get started for free</motion.button>
        </div>
        <div className="w-[calc(100vw-24px)] md:w-[calc(100vw-20%)] mx-auto mt-16 flex flex-col items-center justify-around">
          <h1 className="text-3xl md:text-4xl font-medium mb-2">Developer Details</h1>
          <h3 className="text-xl font-medium">SayanDip Adhikary</h3>
          <Link href="mailto:adhikarysayandip@gmail.com">adhikarysayandip@gmail.com</Link>
          <Link href="https://portfolio-adhikarysayandip-gmailcom.vercel.app/">Portfolio</Link>
        </div>
        <Footer />
      </main >
    </>
  )
}
