import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/router';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '@/Config/firebase';
import { useAuth } from '@/Config/auth';
import Loader from '@/components/Loader';
import Social from '@/components/Social';

const Register = () => {
    const router = useRouter();
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { authUser, isLoading, setAuthUser } = useAuth();

    const provider = new GoogleAuthProvider();

    const signupHandler = async () => {
        if (!name || !email || !password) {
            alert("Every field is mandatory to be filled!");
            return;
        }
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            )
            await updateProfile(auth.currentUser, {
                displayName: name,
            })
            setAuthUser({
                uid: user.uid,
                email: user.email,
                name,
            });
        } catch (err) {
            console.log(err);
        }
    }

    const signUpWithGoogle = async () => {
        const user = await signInWithPopup(auth, provider);
    }

    useEffect(() => {
        if (!isLoading && authUser) {
            router.push("/notes");
        }
    }, [authUser, isLoading])

    return isLoading || (!isLoading && !!authUser) ? (
        <Loader />
    ) : (
        <>
            <Head>
                <title>Keeper.io | Signup</title>
                <link rel="icon" type="image/x-icon" href="./notebook.ico" />
            </Head>
            <main className='h-[100vh] w-[100vw] bg-white p-3'>
                <section className='h-full grid grid-cols-1 lg:grid-cols-3'>
                    <div className="bg-[url('../public/notebook.jpg')] bg-center bg-no-repeat bg-cover h-[100%] w-[100%] hidden lg:block col-span-2">

                    </div>
                    <div className='py-5 px-5 md:px-28 lg:px-20 relative flex flex-col items-start justify-center gap-3'>
                        <Image src={require('../public/noteIcon.png')} className='h-12 w-12' />
                        <h2 className='w-full text-2xl font-bold'>Create an account</h2>
                        <p className='w-full text-xs text-gray-500'>Start making unlimited notes of important things.</p>
                        <form onSubmit={(e) => e.preventDefault()} className='w-full'>
                            <input type='text' placeholder='Name' className='h-10 w-full my-1 border-b text-sm px-2 focus:outline-none focus:border-b-black' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type='email' placeholder='Email' className='h-10 w-full my-1 border-b text-sm px-2 focus:outline-none focus:border-b-black' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' placeholder='Password' className='h-10 w-full my-1 border-b text-sm px-2 focus:outline-none focus:border-b-black' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className='h-10 block my-1 w-full bg-[#1abc9c] text-white text-sm font-semibold rounded-md' onClick={signupHandler}>Create account</button>
                            <button className='h-10 border-2 my-1 w-full rounded-md flex items-center justify-center gap-1 text-sm font-semibold' onClick={signUpWithGoogle}><FcGoogle className='text-2xl' />Sign up with Google</button>
                        </form>
                        <p className='w-full text-sm text-gray-800 text-center'>Already have an account? <Link href='login' className='font-semibold text-black underline'>Log in</Link></p>
                        <Social />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Register