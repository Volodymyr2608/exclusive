import MainNavigationList from '@/app/_components/units/Home/MainNavigationList'
import React from 'react'

const MainNavigation = () => {
  return (
    <section className='container flex gap-x-11'>
      <div className='max-w-[360px] w-full pr-4 pt-10 border-r border-r-border-color-default'>
        <MainNavigationList />
      </div>
      <div className='flex-1'>Slider</div>
    </section>
  )
}

export default MainNavigation