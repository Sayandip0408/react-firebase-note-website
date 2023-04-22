
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <nav className='shadow-md w-[100vw] h-[60px] sticky top-0 bg-white flex items-center justify-between px-3 md:px-6'>
            <motion.div initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className='flex items-center justify-center gap-1 cursor-pointer'>
                <Image src={require('../public/noteIcon.png')} alt='logo' className='h-10 w-10' />
                <Link href="/notes" className='text-xl font-bold text-black'>Keeper.io</Link>
            </motion.div>
            <motion.div initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} className='shadow-md rounded-full' >
                <Link href="/profile">
                    <Image src={require('../public/useraccount.png')} width={40} height={40} alt='profileImg' className='rounded-full cursor-pointer' />
                </Link>
            </motion.div>
        </nav>
    )
}

export default Navbar