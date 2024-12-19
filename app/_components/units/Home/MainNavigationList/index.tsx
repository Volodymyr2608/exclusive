import React from 'react'
import NavigationItem from './NavigationItem'

import mainNavigation from '@/app/_lib/dummy/navigation/mainHome.json'

const MainNavigationList = () => {
  return (
    <nav className="bg-white ">
      <ul>
        {mainNavigation.map(({ link, name, subcategories }) => (
          <li className="relative group py-2 hover:bg-gray-100" key={name}>
            <NavigationItem 
              name={name} 
              link={link}
              subcategories={subcategories}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigationList