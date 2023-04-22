import { useAuth } from '@/Config/auth';
import { auth } from '@/Config/firebase';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import Loader from "@/components/Loader";
import Social from '@/components/Social';

const Provider = new GoogleAuthProvider();

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { authUser, isLoading, setAuthUser } = useAuth();

    useEffect(() => {
        if (!isLoading && authUser) {
            router.push("/notes");
        }
    }, [authUser, isLoading]);

    const signinHandler = async () => {
        if (!email || !password) return;
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("An error occured", error);
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, Provider);
        } catch (error) {
            console.error("An error occured", error);
        }
    }

    return isLoading || (!isLoading && !!authUser) ? (
        <Loader />
    ) : (
        <>
            <Head>
                <title>Keeper.io | Login</title>
                <link rel="icon" type="image/x-icon" href="./notebook.ico" />
            </Head>
            <main className='h-[100vh] w-[100vw] bg-white p-3'>
                <section className='h-full grid grid-cols-1 lg:grid-cols-3'>
                    <div className='py-5 px-5 md:px-28 lg:px-20 relative flex flex-col items-start justify-center gap-3'>
                        <Image src={require('../public/noteIcon.png')} className='h-12 w-12' />
                        <h2 className='w-full text-2xl font-bold'>Login</h2>
                        <p className='w-full text-xs text-gray-500'>Start making unlimited notes of important things.</p>
                        <form onSubmit={(e) => e.preventDefault()} className='w-full'>
                            <input type='email' placeholder='Email' className='h-10 w-full my-1 border-b text-sm px-2 focus:outline-none focus:border-b-black' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' placeholder='Password' className='h-10 w-full my-1 border-b text-sm px-2 focus:outline-none focus:border-b-black' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className='h-10 block my-1 w-full bg-[#1abc9c] text-white text-sm font-semibold rounded-md' onClick={signinHandler}>Login</button>
                            <button className='h-10 border-2 my-1 w-full rounded-md flex items-center justify-center gap-1 text-sm font-semibold' onClick={signInWithGoogle}><FcGoogle className='text-2xl' />Sign in using Google</button>
                        </form>
                        <p className='w-full text-sm text-gray-800 text-center'>Do not have an account? <Link href='/register' className='font-semibold text-black underline'>Register</Link></p>
                        <Social />
                    </div>
                    <Image src={require("../public/notebook.jpg")} className='h-[calc(100vh-24px)] w-[100%] hidden lg:block col-span-2 object-cover' />
                </section>
            </main>
        </>
    )
}

export default Login
