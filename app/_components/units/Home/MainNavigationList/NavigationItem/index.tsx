import { TNavigationItem } from '@/app/_lib/types/_components/units/Home/MainNavigationList/NavigationItem';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const NavigationItem = ({ name, link, subcategories }: TNavigationItem) => {
  return (
    <>
      <Link 
        href={link} 
        className="flex justify-between gap-x-2 text-black transition duration-200"
      >
        {name}

        {subcategories && (<ChevronRight width={24} height={24} />)}
      </Link>

      {subcategories && (
        <div 
          className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg z-20"
        >
          <ul className="w-48 border border-gray-200 rounded-md">
            {subcategories.map((sub) => (
              <li key={sub.link}>
                <Link 
                  href={sub.link} 
                  className="block px-4 py-2 text-black hover:bg-gray-200 transition duration-200"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavigationItem;