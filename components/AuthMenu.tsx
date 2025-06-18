'use client';
import { UserButton, useUser,SignInButton } from '@clerk/nextjs'
import React from 'react'

function AuthMenu() {
    const { isSignedIn } = useUser();
  return (
    <div>
        {!isSignedIn ? (
            <SignInButton>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Get Started
                </button>
            </SignInButton>
        ):(
            <div className="flex items-center gap-2">
                <UserButton
                    appearance={{
                    elements: {
                    userButtonAvatarBox: "w-20 h-20",
                    },
                    }}/>
            </div>
        )}
      
    </div>
  )
}

export default AuthMenu
