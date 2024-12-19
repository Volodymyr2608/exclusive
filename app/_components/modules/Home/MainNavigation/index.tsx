import MainNavigationList from '@/app/_components/units/Home/MainNavigationList'
import React from 'react'
import HeroCarousel from '../HeroCarousel'

const MainNavigation = () => {
  return (
    <section className='container flex gap-x-11'>
      <div className='max-w-[360px] w-full pr-4 pt-10 border-r border-r-border-color-default'>
        <MainNavigationList />
      </div>
      <div className='h-full flex-1 pt-10'>
        <HeroCarousel />
      </div>

    </section>
  )
}

export default MainNavigation