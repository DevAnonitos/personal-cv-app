
import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { 
  Dialog,  
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';

import { CiLogin } from "react-icons/ci";

const SignInDialogButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className='flex items-center justify-center font-semibold dark:bg-[#FF8E01]'>
            <CiLogin size={20} className='mr-2' /> Log In
          </Button>
        </DialogTrigger>
        <DialogContent className="sign-in_dialog dark:bg-[#161622]">
          <DialogHeader>
            <DialogTitle className='text-2xl'>Sign in</DialogTitle>
            <DialogDescription>
              To continue platform. Please sign in here!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Google SignInButton */}
            <div className='border px-4 py-2 rounded-md'>
              Google
            </div>
            {/* GitHub SignInButton */}
            <div className='border px-4 py-2 rounded-md'>
              GitHub
            </div>
          </div>
          <DialogFooter>
            <p className="font-normal text-slate-500 text-xs text-muted-foreground">
              By creating an your account, you should agree to our 
              <a href="/terms-of-service" className="text-sm font-semibold hover:underline"> Terms of Service</a> and 
              <a href="/privacy-policy" className="text-sm font-semibold hover:underline"> Privacy Policy</a>.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SignInDialogButton;