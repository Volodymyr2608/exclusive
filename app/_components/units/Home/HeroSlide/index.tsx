import { THeroSlide } from '@/app/_lib/types/_components/units/Home/HeroSlide';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'

const HeroSlide: FC<THeroSlide> = ({ slide }) => {
  const {
    title,
    coverImage,
    subIcon,
    subTitle,
    link
  } = slide;

  return (
    <div className="embla__slide bg-black text-primary-white flex justify-between h-full flex-shrink-0 flex-grow-0 basis-full">
      <div className='max-w-[364px] flex flex-col gap-y-5 pt-14 pb-12 pl-16'>
        <div className='flex items-center gap-x-6'>
          <Image src={subIcon} alt={subTitle} width={40} height={49} />
          <p>{subTitle}</p>
        </div>
        <h1 className=' font-semibold text-5xl  leading-[60px] tracking-wider'>{title}</h1>
        <Link href={link.path} className='text-base font-medium hover:underline flex gap-x-2 items-center'>
          {link.title}{' '} <ArrowRight />
        </Link>
      </div>
      <div className='relative h-full flex flex-col justify-center items-center pt-10'>
        <Image src={coverImage} alt={title} width={496} height={344} />
      </div>

    </div>
  )
}

export default HeroSlide;
