import Breadcrumbs from '@/app/_components/units/Breadcrumbs'
import breadcrumbsAbout from '@/app/_lib/dummy/breadcrumbs/about.json'

export default function ProductsPage() {
  return (
    <div className='mt-20 container'>
      <Breadcrumbs breadcrumbs={breadcrumbsAbout} />
      <h1>Products page</h1>
    </div>
  )
}