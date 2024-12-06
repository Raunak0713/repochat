'use client'
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import React from 'react';

export interface SignUpButtonProps {}

const SignUpButton : React.FC<SignUpButtonProps> = () => {
  return (
    <div className='flex items-center gap-x-5 justify-end p-5'>
      <div>Please Sign In</div>
      <Button onClick={() => signIn("github")}>Sign In</Button>
    </div> 
  );
};

export default SignUpButton;
