import Link from 'next/link';
import React from 'react';

import navigationTop from '@/app/_lib/dummy/navigation/top.json'
import { Input } from '../../ui/input';

const Header = () => {
  return (
    <header>
      <div className='min-h-12 bg-button-card flex justify-center items-center text-primary-white gap-x-2'>
        <span className='text-primary-white text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <Link href="/" className='font-semibold underline'>ShopNow</Link>
      </div>
      <div className='border-b-border-color-default border-b pt-10 pb-4'>
        <div className='container flex justify-between items-center'>
          <Link href="/" className='text-2xl font-bold text-text-tertiary'>Exclusive</Link>
          <nav>
            <ul className='flex gap-x-12'>
              {navigationTop.map((item) => (
                <li key={item.id}>
                  <Link href={item.path} className='text-base hover:underline'>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Input type='text' placeholder='What are you looking for?' className='focus-visible:' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
