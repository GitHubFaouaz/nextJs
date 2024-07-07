import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import {  User2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import LogOutButton from './LogoutButton';

const UserProfile =  async() => {
    const session = await getAuthSession(); 
    return (
      <DropdownMenu >
         <DropdownMenuTrigger asChild>{/* asChild vient supprimer DropdownMenuTrigger on a que le button  */}
            <Button size="sm" variant='outline'>
             {session?.user.name ?? ""}{/*  on affgiche un string sil n'existe pas  */}
            </Button>
        </DropdownMenuTrigger >
        <DropdownMenuContent className='contentMenu'>
            <DropdownMenuItem  asChild>
              <Link href={"/profile"}>
              <User2 className='mr-2 w-4 h-4' />
                Profile
              </Link>
            </DropdownMenuItem>
            <LogOutButton/> 
        </DropdownMenuContent>
      </DropdownMenu>
    );
};
// remarque quon a des serveur component ( <Button link etc.... ) dans des client component avec le use client  ( </DropdownMenuContent>  </DropdownMenuContent>  </DropdownMenu> )

export default UserProfile;