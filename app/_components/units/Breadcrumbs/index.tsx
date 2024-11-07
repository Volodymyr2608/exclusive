
import React, { FC } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import { TBreadcrumbs } from '@/app/_lib/types/_components/units/Breadcrumbs';

const Breadcrumbs: FC<TBreadcrumbs> = ({ breadcrumbs }) => {
  if (!breadcrumbs.length) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={breadcrumb.path}>{breadcrumb.name}</BreadcrumbLink>
            </BreadcrumbItem>
            {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default Breadcrumbs;
