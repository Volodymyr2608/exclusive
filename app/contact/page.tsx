import React from 'react'
import Breadcrumbs from '../_components/units/Breadcrumbs'
import ContactInfo from '../_components/modules/Contact/ContactInfo'
import breadcrumbsContact from '@/app/_lib/dummy/breadcrumbs/contact.json'
import ContactForm from '../_components/modules/Contact/ContactForm'

const Contact = () => {
  return (
    <div className='mt-20 container'>
      <Breadcrumbs breadcrumbs={breadcrumbsContact} />
      <div className='grid grid-cols-3 mt-20 gap-x-8'>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact;
