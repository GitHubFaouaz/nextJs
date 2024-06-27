import React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types';


function themeProvider ({children, ...props} : ThemeProviderProps)  {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default themeProvider;