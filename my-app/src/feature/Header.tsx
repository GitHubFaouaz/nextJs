
import ThemeToggle from '@/src/theme/ThemeToggle';
import React from 'react';
import LoginButton from './layout/auth/LoginButton';
import { getAuthSession } from '@/lib/auth';
import UserProfile from './layout/auth/UserProfile';

const Header = async () => {
    const session = await getAuthSession(); // on recupere les informations user
    // console.log('sessionlog',session)
    return (
        <div className='border-b border-b-accent fixed top-0 w-full z-20 bg-background'>
            <div className='container flex items-center max-w-lg  m-auto py-2 gap-1'>
                <h1 className='text-2xl fond-bold mr-auto'>GithRead</h1>
                {session?.user ? <UserProfile/> : <LoginButton/>} 
                <ThemeToggle/>
            </div>
        </div>
    );
};

export default Header;