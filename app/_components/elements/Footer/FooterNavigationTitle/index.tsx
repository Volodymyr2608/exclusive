import React, { FC, PropsWithChildren } from 'react'

const FooterNavigationTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h3 className='text-xl font-medium'>{children}</h3>;
}

export default FooterNavigationTitle