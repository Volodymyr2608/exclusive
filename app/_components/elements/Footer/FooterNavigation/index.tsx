import { TFooterNavigation } from '@/app/_lib/types/_components/elements/Footer/FooterNavigation';
import { FC } from 'react'
import FooterNavigationTitle from '../FooterNavigationTitle';
import { cn } from '@/app/_lib/utils/cn';

const FooterNavigation: FC<TFooterNavigation> = ({ name, children, classNames }) => {
  return (
    <div className={cn('flex flex-col gap-y-6', classNames)}>
      <FooterNavigationTitle>{name}</FooterNavigationTitle>
      {children}
    </div>
  )
}

export default FooterNavigation;