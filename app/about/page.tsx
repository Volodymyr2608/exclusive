import Breadcrumbs from "../_components/units/Breadcrumbs";
import breadcrumbsAbout from '@/app/_lib/dummy/breadcrumbs/about.json'

export default function AboutUsPage() {
  return (
    <div className='mt-20 container'>
      <Breadcrumbs breadcrumbs={breadcrumbsAbout} />
      
    </div>
  )
}