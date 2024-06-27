
import ThemeToggle from '@/src/theme/ThemeToggle';
import React from 'react';

const Header = async () => {
    return (
        <div className='border-b border-b-accent'>
            <div className='container flex items-center max-w-lg  m-auto py-2 gap-1'>
                <h1 className='text-2xl fond-bold mr-auto'>GithRead</h1>
                <ThemeToggle/>
            </div>
        </div>
    );
};

export default Header;