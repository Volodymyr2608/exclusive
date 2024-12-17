import { TFooterNavigationItem } from '@/app/_lib/types/_components/elements/Footer/FooterNavigationTitle';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react'
import TelLink from '../../Links/TelLink';
import MailLink from '../../Links/MailLink';

const Item: FC<PropsWithChildren> = ({ children }) =>  {
  return <li className='text-base'>{children}</li>;
}

const FooterNavigationItem: FC<TFooterNavigationItem> = ({ title, type, path }) => {
  switch (type) {
    case "tel":
      return (
        <Item>
          <TelLink tel={title} />
        </Item>
      );
    case "mail":
      return (
        <Item>
          <MailLink mail={title} />
        </Item>
      );
    case "link":
      return (
        <Item>
          <Link href={path || "#"}>{title}</Link>
        </Item>
      );
    default:
      return <Item>{title}</Item>;
  }
}

export default FooterNavigationItem;