'use client'
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import React from 'react';
import { Session } from "next-auth";

export interface SignInButtonProps {
  session: Session;
}

const SignInButton : React.FC<SignInButtonProps> = ({ session }) => {
  return (
    <div className='flex items-center gap-x-5 justify-end p-5'>
      <div>Heyyyyy, {session.user?.name}</div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div> 
  );
};

export default SignInButton;
