import { useRouter } from 'next/router';
import React from 'react'
import { GrFacebookOption } from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';
import { IoMdLaptop } from 'react-icons/io';
import { SlSocialInstagram } from 'react-icons/sl';

const Social = () => {
    const router = useRouter();

    return (
        <div className='w-[50%] absolute top-2 right-5 md:right-28 lg:right-20 flex items-center justify-end gap-2'>
            <SlSocialInstagram className='text-xl cursor-pointer' onClick={() => router.push("https://www.instagram.com/sayan.dip7/")} />
            <GrFacebookOption className='text-xl cursor-pointer' onClick={() => router.push("https://www.facebook.com/sayandip.adhikary.96")} />
            <IoMdLaptop className='text-xl cursor-pointer' onClick={() => router.push("https://portfolio-adhikarysayandip-gmailcom.vercel.app/")} />
            <ImGithub className='text-xl cursor-pointer' onClick={() => router.push("https://github.com/Sayandip0408")} />
        </div>
    )
}

export default Social