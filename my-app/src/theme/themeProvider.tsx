import React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types';


function themeProvider ({children, ...props} : ThemeProviderProps)  {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default themeProvider;
// Ce code définit une fonction themeProvider qui encapsule NextThemeProvider de next-themes. Cela permet de passer des propriétés et des enfants au NextThemeProvider de manière flexible.