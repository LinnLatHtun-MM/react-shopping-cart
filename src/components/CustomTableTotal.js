"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from '@mui/material';
import {Box} from '@mui/material';
import {green, lightGreen} from '@mui/material/colors';


export default function CustomTableTotal({total}) {

    console.log("total", total);


    return (


        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: 2,
            border: '5px solid lightgray'
        }}>

            <TableContainer component={Paper} sx={{
                width: '100%',
                boxShadow: 'none', // Removes the default shadow
                border: 'none' // Removes any border
            }}>
                <Table aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{color: green[900], fontWeight: 700}} align="left" colSpan={2}>CART
                                TOTALS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{color: green[900],}}>Subtotal</TableCell>
                            <TableCell sx={{color: green[900], fontWeight: 700}} align="left">{total}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{color: green[900],}}>Total</TableCell>
                            <TableCell sx={{color: green[900], fontWeight: 700}} align="left">{total}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', mt: 2}}>
                <Button variant="contained"
                        sx={{
                            fontWeight: 700,
                            width: '80%',
                            backgroundColor: lightGreen[200]
                        }}
                >
                    Proceed to Checkout
                </Button>
            </Box>
        </Box>


    );
}

