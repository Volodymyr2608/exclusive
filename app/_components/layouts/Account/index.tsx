import React, { FC } from 'react'
import Breadcrumbs from '../../units/Breadcrumbs'
import { createClient } from '@/supabase/server';
import { redirect } from 'next/navigation';
import AccountNavigation from '../../modules/Account/Navigation';
import { TAccountLayout } from '@/app/_lib/types/_components/layouts/Account';
import accountBreadcrumbs from "@/app/_lib/dummy/breadcrumbs/account.json" with { type: 'json' }


const AccountLayout: FC<TAccountLayout> = async ({ children, pageType }) => {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <section className='w-full flex justify-between items-center mb-20'>
        <Breadcrumbs breadcrumbs={accountBreadcrumbs[pageType]} />
        <div>
          Welcome! <span className='text-secondary-red font-medium'>{user.user_metadata.username}</span>
        </div>
      </section>
      <div className="w-full grid grid-cols-4">
        <AccountNavigation />

        {children}
      </div>
    </>
  )
}

export default AccountLayout