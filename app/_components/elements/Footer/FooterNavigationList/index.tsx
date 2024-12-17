import React, { FC, PropsWithChildren } from 'react'

const FooterNavigationList: FC<PropsWithChildren> = ({ children }) => {
  return <ul className='flex flex-col gap-y-4'>{children}</ul>;
}

export default FooterNavigationList;