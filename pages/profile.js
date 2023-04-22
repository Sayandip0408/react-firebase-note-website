import { useAuth } from '@/Config/auth';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Profile = () => {
    const { signOut, authUser, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !authUser) {
            router.push("/login");
        }
    }, [authUser, isLoading]);
    return !authUser ? (
        <Loader />
    ) : (
        <>
            <Head>
                <title>Keeper.io | Profile</title>
                <link rel="icon" type="image/x-icon" href="./notebook.ico" />
            </Head>
            <main className='bg-[#F7F6F9] h-[100vh] w-[100vw]'>
                <Navbar />
                <section className='h-[calc(100vh-60px)] overflow-x-hidden overflow-y-scroll'>
                    <div className='h-[inherit] w-full flex flex-col items-center justify-center gap-5'>
                        <h2 className='text-xl font-semibold'>Profile</h2>
                        <Image src={require('../public/useraccount.png')} width="80" height="80" alt='profileImg' className='rounded-full cursor-pointer shadow-lg' />
                        <h3 className='text-lg font-semibold'>{authUser.name}</h3>
                        <p className=''>{authUser.email}</p>
                        <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className='bg-gradient-to-r from-[#ED213A] to-[#93291E] text-white h-10 w-60 rounded-md' onClick={signOut}>Log Out</motion.button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile