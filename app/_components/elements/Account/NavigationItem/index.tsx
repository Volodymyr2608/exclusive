'use client';

import { TAccountNavigationItem } from '@/app/_lib/types/_components/elements/Account/AccountNavigationItem';
import { cn } from '@/app/_lib/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react'

const AccountNavigationItem: FC<TAccountNavigationItem> = ({ slug, name }) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <li>
      <Link href={slug} className={cn({ 'text-secondary-red': pathname === slug })}>{name}</Link>
    </li>
  )
}

export default AccountNavigationItem