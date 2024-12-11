"use client"; // Use this if you're in a Next.js environment

import React, { useState, useRef } from "react";
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import ArchiveIcon from "@mui/icons-material/Archive";
import { styled } from "@mui/material/styles";
import { grey } from '@mui/material/colors';
import { Global } from '@emotion/react';
import Skeleton from '@mui/material/Skeleton';
import BottomDrawer from "./BottomDrawer";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
        theme.palette.mode === "light" ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled("div")(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
}));

function CustomButtomNavBar(props) {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = props.window !== undefined ? () => props.window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <Box sx={{ pb: 7 }} ref={ref}>
                <CssBaseline />
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999 }} elevation={3}>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            if (newValue === 2) { // Assuming 'Search' is at index 2
                                toggleDrawer(true)();
                            }
                        }}
                        showLabels
                    >
                        <BottomNavigationAction label="Store" icon={<StorefrontIcon />} />
                        <BottomNavigationAction label="My Account" icon={<PersonIcon />} />
                        <BottomNavigationAction label="Search" icon={<ArchiveIcon />} />
                        <BottomNavigationAction label="Wishlist" icon={<ArchiveIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>

            {/* <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <Skeleton variant="rectangular" height="100%" />
                </StyledBox>
            </SwipeableDrawer> */}

            {open ? <BottomDrawer drawerOpen={toggleDrawer(true)} open={open} drawerClose={toggleDrawer(false)}> </BottomDrawer> : null}
        </Root>
    );
}

// CustomButtomNavBar.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

export default CustomButtomNavBar;
