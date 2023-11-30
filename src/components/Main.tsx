import React, { Suspense, useEffect } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Account from './Account/Account';
import Loader from './Loaders';

const Main = () => {
   const [theme, setTheme] = useState(null);

   useEffect(() => {
      import('Sharedlib/theme').then((sharedTheme) => {
         setTheme(sharedTheme.default);
      }).catch((error) => {
         console.log('Error loading shared theme', error);
      })
   }, []);
   
   if (!theme) {
      return (
        <Loader />
      );
   }
    
   return (
      <ThemeProvider theme={theme}>
         <Account />
      </ThemeProvider>
      )
}

export default Main;