import { TSubTitle } from '@/app/_lib/types/_components/elements/SubTitle';
import { cn } from '@/app/_lib/utils/cn';
import { FC } from 'react'

const SubTitle: FC<TSubTitle> = ({ subTitle, classNames }) => {
  return (
    <div
      className={cn(
        'py-2.5 pl-9 relative text-base font-semibold text-secondary-red',
        "before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-5 before:bg-secondary-red before:rounded",
        classNames
      )}
    >
      {subTitle}
    </div>
  )
}

export default SubTitle;
