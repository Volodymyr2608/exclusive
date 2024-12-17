import { cn } from '@/app/_lib/utils/cn'
import Link from 'next/link'
import React from 'react'

const Logo = ({ classNames = 'text-text-tertiary' }) => {
  return (
    <Link href="/" className={cn('text-2xl font-bold', classNames)}>Exclusive</Link>
  )
}

export default Logo