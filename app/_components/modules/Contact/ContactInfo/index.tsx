import ContactAction from '@/app/_components/units/ContactAction'
import { TContactItem } from '@/app/_lib/types/_components/units/ContactAction'
import React, { Fragment } from 'react'

const contactItems: TContactItem[] = [
  {
    id: 1,
    head: {
      icon: 'phone',
      title: 'Call To Us'
    },
    items: [
      {
        type: 'text',
        text: 'We are available 24/7, 7 days a week.'
      },
      {
        type: 'phone',
        text: '+8801611112222'
      }
    ]
  },
  {
    id: 2,
    head: {
      icon: 'message',
      title: 'Write To US'
    },
    items: [
      {
        type: 'text',
        text: 'Fill out our form and we will contact you within 24 hours.'
      },
      {
        type: 'email',
        text: 'customer@exclusive.com'
      },
      {
        type: 'email',
        text: 'support@exclusive.com'
      }
    ]
  }
]

const ContactInfo = () => {
  return (
    <div className='col-span-1 shadow-primary rounded py-10 px-9'>
      {contactItems.map((item, index) => (
        <Fragment key={item.id}>
          <ContactAction contactItem={item} />
          {index !== contactItems.length - 1 && (<hr className='my-8' />)}
        </Fragment>
      ))}
      
    </div>
  )
}

export default ContactInfo