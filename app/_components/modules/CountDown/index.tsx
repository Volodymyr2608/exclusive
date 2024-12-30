'use client'

import useTimer from '@/app/_lib/hooks/useTimer';
import { TCountDown } from '@/app/_lib/types/_components/elements/CountDown';
import { FC } from 'react'
import TimeBox from '@/app/_components/elements/TimeBox';

const CountDown: FC<TCountDown> = ({ deadline }) => {
  const { days, hours, minutes, seconds } = useTimer(deadline);

  return (
    <div className="overflow-hidden grid grid-cols-4 place-items-center max-w-[302px] w-full">
      <TimeBox label="Days" value={days} />
      <TimeBox label="Hours" value={hours} />
      <TimeBox label="Minutes" value={minutes} />
      <TimeBox label="Seconds" value={seconds} isLastItem />
    </div>
  );
}

export default CountDown;