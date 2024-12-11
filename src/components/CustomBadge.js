"use client"
import * as React from 'react';
import Badge from '@mui/material/Badge';
import {Icon} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/material/styles';
import {pink, green, orange} from '@mui/material/colors';
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";

const ColorButton = styled(IconButton)(({theme}) => ({
    // color: theme.palette.getContrastText(pink[500]),
    // color pallte shi dl
    backgroundColor: pink[50],
    '&:hover': {
        backgroundColor: green[600],
        color: theme.palette.getContrastText(pink[500]),

    },
}));

const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        // right: -3,
        top: 8,
        // border: `2px solid ${theme.palette.background.paper}`,
        // padding: '0 4px',
        backgroundColor: orange[400],
    },
}));

export default function CustomBadge() {

    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);

    //To Do
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const router =  useRouter();


    return (
        // <Badge badgeContent={4} sx={{}} color="primary">
        //     {/* <MailIcon color="action" /> */}
        //     {/* <Icon>add_circle</Icon> */}
        //     {/* <Icon>alarm-on</Icon> */}
        //     {/* <Icon>shopping-basket</Icon> */}
        //     <ColorButton>
        //         <Icon>shopping-basket</Icon>
        //     </ColorButton>
        // </Badge>

        //<StyledBadge badgeContent={0}> no content ma pr bu
        <StyledBadge badgeContent={totalCount} size="small">
            <ColorButton totalCount={totalCount} onClick={()=> router.push('/cart')}>
                <Icon>shopping-basket</Icon>
            </ColorButton>
        </StyledBadge>
    );
}

// next js header
{/* <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/> */
}
