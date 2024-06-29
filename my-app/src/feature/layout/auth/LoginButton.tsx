// autentification a travers githup
'use client'
import { Button } from '@/components/ui/button';
import React from 'react';
import {signIn} from 'next-auth/react'
import { LogIn } from 'lucide-react';

const LoginButton = () => {
    return (
        <Button onClick={()=> signIn()}
      
        ><LogIn  className='mr-2 w-4 h-4'/> Login
        </Button>
    );
};

export default LoginButton;