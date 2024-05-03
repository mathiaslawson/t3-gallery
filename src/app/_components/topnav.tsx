"use client";


import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import React from 'react'
import { UploadButton } from '~/utils/uploadthing'



export default function TopNav() {


  const router = useRouter()


  return (
    <nav className="flex w-full items-center justify-between p-2 text-xl font-semibold border-b" >
    <div>Gallery</div>
    <div className='flex flex-row'>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint='imageUploader' onClientUploadComplete={
            () => {
              //
              router.refresh()
            }
          }/>
            <UserButton />
        </SignedIn>
    </div>
 </nav>
  )
}