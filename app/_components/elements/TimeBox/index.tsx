import { TTimeBox } from '@/app/_lib/types/_components/elements/TimeBox';
import { cn } from '@/app/_lib/utils/cn';
import { FC } from 'react'

const TimeBox: FC<TTimeBox> = ({ label, value, isLastItem = false }) => (
  <div className="text-text-tertiary w-full flex flex-col gap-y-1">
    <p className="text-xs font-medium">{label}</p>
    <p
      className={cn(
        "font-bold text-3xl relative after:content-[':'] after:block after:absolute after:right-4 after:top-0 after:bottom-0 after:text-3xl after:text-button-primary-hover",
        { "after:hidden": isLastItem }
      )}
    >
      {String(value).padStart(2, '0')}
    </p>
  </div>
);

export default TimeBox