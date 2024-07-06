'use client'
import React, { useTransition } from 'react';
import { signOut} from 'next-auth/react'
import { LogOut } from 'lucide-react';
import {Loader } from '@/components/ui/loader'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

const LogOutButton = () => {
    const [isPending,startStransition ] = useTransition(); // pour gere le loading pendant l'attente (il gere la transition )
    return (
        <DropdownMenuItem onClick={()=> {startStransition(() =>signOut())} }
        >
         {isPending? (
          <Loader className='mr-2 w-4 h-4' /> 
         ): (
         <LogOut  className='mr-2 w-4 h-4'/>
        
         )}  
         Logout  
        {/* <LogIn  className='mr-2 w-4 h-4'/> {isPending?'Loading...' : 'Login'} */}
        </DropdownMenuItem>
    );
};

// startTransition: element declancher  Une fonction que vous utilisez pour envelopper les mises à jour d'état que vous souhaitez marquer comme des transitions.
// isPending: Un booléen qui indique si une transition est en cours.
export default LogOutButton;