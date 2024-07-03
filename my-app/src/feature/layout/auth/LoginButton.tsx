// autentification a travers githup
'use client'
import { Button } from '@/components/ui/button';
import React, { useTransition } from 'react';
import {signIn} from 'next-auth/react'
import { LogIn } from 'lucide-react';
import {Loader } from '@/components/ui/loader'

const LoginButton = () => {
    const [isPending,startStransition ] = useTransition(); // pour gere le loading pendant l'attente (il gere la transition )
    return (
        <Button onClick={()=> {startStransition(() =>signIn())} }
        >
         {isPending? (
          <Loader className='mr-2 w-4 h-4' /> 
         ): (
         <LogIn  className='mr-2 w-4 h-4'/> 
         )}    
        {/* <LogIn  className='mr-2 w-4 h-4'/> {isPending?'Loading...' : 'Login'} */}
        </Button>
    );
};

// startTransition: element declancher  Une fonction que vous utilisez pour envelopper les mises à jour d'état que vous souhaitez marquer comme des transitions.
// isPending: Un booléen qui indique si une transition est en cours.
export default LoginButton;