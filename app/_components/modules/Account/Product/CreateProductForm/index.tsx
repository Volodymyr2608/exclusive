'use client';

import { SubmitButton } from '@/app/_components/submit-button';
import { Input } from '@/app/_components/ui/input';
import { Textarea } from '@/app/_components/ui/textarea';
import { createProduct } from '@/app/account/products/actions';
import { Plus } from 'lucide-react';
import React, { useActionState, useEffect } from 'react'

const initialState = {
  error: ''
}

const CreateProductForm = () => {
  const [state, formAction] = useActionState(createProduct, initialState)

  return (
    <form action={formAction} className="flex flex-col text-text-tertiary gap-y-12 w-full">
      <div className="flex flex-col gap-y-4">
        <Input
          name="title"
          placeholder="Title"
          required
        />
        <Input
          name="price"
          placeholder="Price product"
          required
        />
        <Textarea className="resize-none" name='description' placeholder="Description product" />

        <div className="flex justify-between items-center">
          <SubmitButton
            pendingText="Signing In..."
            className="text-primary-white rounded py-2 px-4"
          >
            <Plus /> Create
          </SubmitButton>
        </div>
      </div>
    </form>
  )
}

export default CreateProductForm;
