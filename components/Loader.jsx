import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
            <Image
                width={100}
                height={100}
                alt="Loading..."
                src="/loader.svg"
            />
        </div>
    )
}

export default Loader