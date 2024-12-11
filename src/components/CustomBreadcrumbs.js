import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { orange, pink } from '@mui/material/colors';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumbs({ params }) {

    return (
        <div role="presentation" onClick={handleClick}>

            <Box sx={{ background: pink[50], p: 3 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/products"
                    >
                        Product
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="detail"
                        aria-current="page"
                    >
                        {params}
                    </Link>
                </Breadcrumbs>
            </Box>

        </div>
    );
}
