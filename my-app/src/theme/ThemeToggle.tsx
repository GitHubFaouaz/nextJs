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

// toggle avec auth 
// import { signIn, useSession } from "next-auth/react";
// import { SunMedium, Moon } from "some-icon-library"; // Remplacez par votre bibliothèque d'icônes

// const ThemeToggle = () => {
//   const { data: session } = useSession();
//   const isDarkMode = theme === 'dark';

//   return (
//     <div>
//       {session ? (
//         <button
//           onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
//           className='rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0'
//         >
//           {isDarkMode ? <Moon size={20} /> : <SunMedium size={20} />}
//         </button>
//       ) : (
//         <button onClick={() => signIn("github")}>Sign in with GitHub</button>
//       )}
//     </div>
//   );
// };



export default ThemeToggle;