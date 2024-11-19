import React from 'react';

import accountNavigation from "@/app/_lib/dummy/navigation/account.json" with { type: 'json' }
import AccountNavigationItem from '@/app/_components/elements/Account/NavigationItem';

const AccountNavigation = () => {
  return (
    <nav className='flex flex-col gap-y-6 col-span-1'>
      {accountNavigation.map((item) => (
        <div key={item.id}>
          <h4 className='text-base font-medium text-text-tertiary'>{item.name}</h4>
          {item.children.length > 0 ? (
            <ul className='ml-9 mt-4 flex flex-col gap-y-2'>
              {item.children.map((subItem) => (
                <AccountNavigationItem key={subItem.id} name={subItem.name} slug={subItem.slug} />
              ))}
            </ul>
          ): null}
        </div>
      ))}
    </nav>
  )
}

export default AccountNavigation;
