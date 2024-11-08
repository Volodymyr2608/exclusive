
import React, { FC, Fragment } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import { TBreadcrumbsProps } from '@/app/_lib/types/_components/units/Breadcrumbs';

const Breadcrumbs: FC<TBreadcrumbsProps> = ({ breadcrumbs }) => {
  if (!breadcrumbs.length) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <Fragment key={breadcrumb.path}>
            <BreadcrumbItem>
              <BreadcrumbLink href={breadcrumb.path}>{breadcrumb.name}</BreadcrumbLink>
            </BreadcrumbItem>
            {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default Breadcrumbs;
