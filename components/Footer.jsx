import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Footer = () => {
    const router = useRouter();

    return (
        <footer className="p-3 w-[calc(100vw-24px)] md:w-[calc(100vw-20%)] mx-auto">
            <motion.div initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className='flex items-center justify-start py-8 cursor-pointer border-b-4 border-black'>
                <Image src={require('../public/noteIcon.png')} alt='logo' className='h-10 w-10' />
                <Link href="/" className='text-xl font-bold'>Keeper.io</Link>
            </motion.div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center">
                    <h4 className="font-semibold uppercase flex items-center">Developer</h4>
                    <Link href="https://portfolio-adhikarysayandip-gmailcom.vercel.app/about" className="flex items-center text-gray-500">
                        About Us
                    </Link>
                    <Link href="https://portfolio-adhikarysayandip-gmailcom.vercel.app/contact" className="flex items-center text-gray-500">
                        Contact Us
                    </Link>
                    <Link href="https://portfolio-adhikarysayandip-gmailcom.vercel.app/" className="flex items-center text-gray-500">
                        Portfolio
                    </Link>
                </div>
                <div className="grid grid-cols-4 justify-items-center">
                    <motion.div initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} onClick={() => router.push("https://www.facebook.com/sayandip.adhikary.96")}>
                        <Image src={require("../public/facebook.png")} className="h-12 w-12 cursor-pointer" />
                    </motion.div>
                    <motion.div initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} onClick={() => router.push("https://www.instagram.com/sayan.dip7/")}>
                        <Image src={require("../public/instagram.png")} className="h-12 w-12 cursor-pointer" />
                    </motion.div>
                    <motion.div initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} onClick={() => router.push("https://github.com/Sayandip0408")}>
                        <Image src={require("../public/github.png")} className="h-12 w-12 cursor-pointer" />
                    </motion.div>
                    <motion.div initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} onClick={() => router.push("https://www.linkedin.com/in/sayandip-adhikary-7359a8199/")}>
                        <Image src={require("../public/linkedin.png")} className="h-12 w-12 cursor-pointer" />
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}

export default Footer