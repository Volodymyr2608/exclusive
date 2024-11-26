'use client'

import React, { useActionState, useEffect } from 'react'

import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { Textarea } from '@/app/_components/ui/textarea';
import { useToast } from '@/app/_lib/hooks/use-toast';
import { contactUsAction } from '@/app/contact/actions';


const initialState = {
  error: ''
}

const ContactForm = () => {
  const [state, formAction] = useActionState(contactUsAction, initialState);
  const { toast } = useToast()

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "default",
        description: state?.error
      })
    }
  }, [state?.error, toast])

  return (
    <div className='col-span-2 shadow-primary rounded py-10 px-8'>
      <form action={formAction} className='flex flex-col gap-y-8'>
        <div className='flex justify-between gap-x-2'>
          <Input
            name="name"
            placeholder="Your Name *"
            required
          />
          <Input
            name="email"
            type='email'
            placeholder="Your Email *"
            required
          />
          <Input
            name="phone"
            placeholder="Your Phone *"
            required
          />
        </div>

        <Textarea className="resize-none" name='message' placeholder="Your Massage" />

        <div>
          <Input id="picture" type="file" name='file' />
        </div>
        <div>
        <Button type="submit" className="bg-button-primary text-primary-white rounded py-4 h-14" >
          Send Massage
        </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;
