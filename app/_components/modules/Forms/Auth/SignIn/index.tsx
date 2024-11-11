'use client';

import { useActionState, useEffect } from 'react'

import { signInAction } from '@/app/(auth)/actions'
import { SubmitButton } from '@/app/_components/submit-button'
import { Input } from '@/app/_components/ui/input'
import Link from 'next/link'
import React from 'react'
import { useToast } from '@/app/_lib/hooks/use-toast';

const initialState = {
  error: ''
}

const SignInForm = () => {
  const [state, formAction] = useActionState(signInAction, initialState)
  const { toast } = useToast()

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "default",
        description: state?.error
      })
    }
  }, [state?.error])
  console.log({ state })
  return (
    <form action={formAction} className="flex flex-col text-text-tertiary gap-y-12 max-w-[371px] w-full">
      <div className="flex flex-col gap-y-6">
        <h1 className="text-4xl font-medium">Log in to Exclusive</h1>
        <p className="text-base">Enter your details below</p>
      </div>

      <div className="flex flex-col gap-y-10">
        <Input
          name="email"
          placeholder="Email"
          required
          variant="auth"
          sizeCss="auth"
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          minLength={6}
          required
          variant="auth"
          sizeCss="auth"
        />
        <div className="flex justify-between items-center">
          <SubmitButton
            pendingText="Signing In..."
            className="bg-button-primary text-primary-white rounded py-4 h-14 min-w-[143px]"
          >
            Log In
          </SubmitButton>
          <Link
            className="text-base text-secondary-red underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        
        <p role='status' aria-live='polite'>{state?.error}</p>
      </div>
    </form>
  )
}

export default SignInForm