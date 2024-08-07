import { buttonVariants } from '@/components/ui/button';
import clsx from 'clsx';
import { Home, PenSquare, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='py-2 flex justify-between container gap-1 fixed right-0 left-0 bottom-0 bg-background max-w-lg m-auto border-top border-accent  '>
            <Link href='' className={clsx(buttonVariants({
                variant:'ghost', // par rapport au buttonVariants
            
             }),
              'flex-1'
             )}>
             <Home size={16}/>
            </Link>

            <Link href='/write' className={clsx(buttonVariants({
                variant:'ghost',
            
             }),
              'flex-1'
             )}>
             <PenSquare size={16} />
            </Link> 
            
           <Link href='/profile' className={clsx(buttonVariants({
                variant:'ghost',
            
             }),
              'flex-1'
             )}>
             <User size={16} />
            </Link>
        </div>
    );
};

export default Footer;