import SubTitle from '@/app/_components/elements/SubTitle';
import Title from '@/app/_components/elements/Title';
import React from 'react'
import CountDown from '../../CountDown';

const TodaysProducts = () => {
  return (
    <section className='mt-36 pb-14'>
      <div className="container flex items-end gap-x-20">
        <div className='flex flex-col gap-y-6'>
          <SubTitle subTitle="Today's" />
          <Title title='Flash Sales' />
        </div>
        <CountDown deadline={new Date("January 31 2025")} />
      </div>

    </section>
  )
}

export default TodaysProducts;
