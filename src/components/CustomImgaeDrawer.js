"use client";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '50%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function CustomImgaeDrawer({ open }) {

    const [openDrawer, setOpenDrawer] = React.useState(open);

    React.useEffect(() => {
        setOpenDrawer(open);
    }, [open]);

    return (
        <Root>
            <CssBaseline />
            <Global
                // styles={{
                //     '.MuiDrawer-root > .MuiPaper-root': {
                //         // height: `calc(50% - ${drawerBleeding}px)`,
                //         overflow: 'visible',
                //         height: '30%',
                //     },
                // }}
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: '30%', // Adjust the height as needed
                        margin: 'auto', // Center vertically
                        position: 'absolute', // Position the drawer
                        bottom: 0, // Stick to the bottom
                        left: '50%', // Center horizontally
                        transform: 'translateX(-50%)', // Center horizontally
                        overflow: 'visible', // Ensure no overflow issues
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        border: 'none',
                    },
                }}
            />
            <SwipeableDrawer
                anchor="bottom"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        // position: 'absolute',
                        // borderTopLeftRadius: 8,
                        // borderTopRightRadius: 8,
                        // visibility: 'visible',
                        // right: 0,
                        // left: 0,
                        display: 'flex', // Use flexbox to center content
                        flexDirection: 'column',
                        alignItems: 'center', // Center horizontally
                        justifyContent: 'center', // Center vertically
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <Puller />
                    <Stack direction="row" spacing={1}>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" disabled color="primary">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="add an alarm">
                            <AlarmIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Stack>
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        // height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <Skeleton variant="rectangular" height="100%" />
                </StyledBox>
            </SwipeableDrawer>
        </Root >
    );
}

CustomImgaeDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
};

export default CustomImgaeDrawer;
