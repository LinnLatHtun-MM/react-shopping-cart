"use client"
import * as React from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import CustomAppBar from '@/components/CustomAppBar';
import CustomButtomNavBar from '@/components/CustomButtomNavBar';
import {Provider} from "react-redux";
import {store} from "@/redux/Store"

export default function RootLayout(props) {
    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
        </head>
        <body>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
            {/*add for redux*/}
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <CustomAppBar></CustomAppBar>
                    {/* position buttom moh loh cat nay tr */}
                    {/* <CustomButtomNavBar></CustomButtomNavBar> */}
                    {props.children}
                    <CustomButtomNavBar></CustomButtomNavBar>

                </ThemeProvider>
                {/*add for redux*/}

            </Provider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
