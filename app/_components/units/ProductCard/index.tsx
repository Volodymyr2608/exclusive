import { TProductCard } from '@/app/_lib/types/_components/units/ProductCard';
import Link from 'next/link';
import React, { FC } from 'react'
import StarRating from '../StarRating';
import Image from 'next/image';
import Circular from '../../elements/Circular';
import { Eye, HeartIcon } from 'lucide-react';

const ProductCard: FC<TProductCard> = ({ product }) => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className='relative w-[270px] h-[250px] bg-secondary-grey rounded flex flex-col justify-center items-center'>
        <div className='absolute top-3 left-3 bg-secondary-red text-xs text-primary-white py-1 px-3 rounded'>{product.discount}%</div>
        <div className='absolute right-3 top-3 z-[2] flex flex-col gap-y-2'>
          <Circular appearance='primary' aria-label='Add to favorite' className='group'>
            <HeartIcon width={20} height={18} className='group-hover:fill-black' />
          </Circular>
          <Circular appearance='primary' aria-label='Add to favorite'>
            <Eye width={20} height={18} />
          </Circular>
          
        </div>
        <div className='relative w-[190px] h-[180px]'>
          <Image src={product.image} alt={product.name} fill />
        </div>
        
      </div>
      <div className='flex flex-col gap-y-2'>
        <Link href={`/product/${product.slug}`} className='text-base font-medium text-text-tertiary'>{product.name}</Link>
        <div className='flex gap-x-3 text-base font-medium'>
          <span className='text-secondary-red'>${product.price}</span>
          <span className='text-gray-400 line-through'>${product.originalPrice}</span>
        </div>
        <StarRating rating={product.rating} reviews={product.reviews} />
      </div>
    </div>
  )
}

export default ProductCard;
