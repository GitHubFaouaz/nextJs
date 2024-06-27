'use client'
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import React from 'react';
import { Moon, SunMedium } from 'lucide-react';

const ThemeToggle = () => {
    const {setTheme,theme} = useTheme();
    return (
       <Button
       variant='ghost'
       size='sm'
       onClick={()=> setTheme(theme === 'light'? 'dark' :'light' )}
       >
         <SunMedium 
         size={20}
         className='rotate-0 scale-100 transition-all duration-500 dark:rotate-90 dark:scale-0' 
         />
        <Moon
        
        size={20}
        className=' absolute rotate-90 scale-0 transition-all  duration-500 dark:rotate-0 dark:scale-100'  />
       </Button>
    //    dark:-rotate-90 : Lorsque le mode sombre est activé (dark), l'élément est tourné de -90 degrés.
    );
};

export default ThemeToggle;