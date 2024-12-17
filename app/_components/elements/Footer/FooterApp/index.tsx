import Image from 'next/image';
import React from 'react'

const FooterDownloadApp = () => {
  return (
    <div className='flex gap-x-2 w-full'>
      <div className='w-20 h-20 relative '>
        <Image src='/icons/qr-code.svg' fill alt='qr-code' />
      </div>

      <div className='flex flex-col gap-y-1 relative'>
        <Image src='/icons/google-play.svg' alt='Google play' className='h-10' width={110} height={40} />
        <Image src='/icons/app-store.svg' alt='App store' className='h-10' width={110} height={40} />
      </div>
    </div>
  )
}

export default FooterDownloadApp;


