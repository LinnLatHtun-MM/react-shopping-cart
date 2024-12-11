import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Box, Button, IconButton, Typography} from '@mui/material';
import {lightGreen, green} from '@mui/material/colors';
import {useDispatch} from 'react-redux';
import {addToCart, decreaseQuantity} from "@/redux/features/cart/cartSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function subtotalEachItem(price, quantity) {
    return (price * quantity).toFixed(2);
}

export default function ProductList({onTotalChange, products}) {
    const dispatch = useDispatch();

    const handleIncrease = (product) => {
        dispatch(addToCart(product));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    React.useEffect(() => {
        if (products) {
            const total = products.reduce((sum, {price, quantity}) => sum + price * quantity, 0).toFixed(2);
            onTotalChange(total);
        }
    }, [products, onTotalChange]);

    const maxCount = 100;
    const minCount = 0;

    return (
        <Box>
            <Box sx={{width: '100%', p: 2}}>
                <Grid container spacing={2}>
                    {products && products.length > 0 && products.map((item) => (
                        <React.Fragment key={item.id}>
                            <Grid item xs={4} md={2}>
                                <Box>
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                        style={{width: "100%", height: "auto", objectFit: "cover"}}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={8} md={10}>
                                <TableContainer component={Paper} sx={{boxShadow: 'none', border: 'none'}}>
                                    <Table aria-label="spanning table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{color: green[900], fontWeight: 700}} align="left"
                                                           colSpan={2}>
                                                    {item.title}
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{color: green[800]}}>Price</TableCell>
                                                <TableCell sx={{
                                                    color: green[900],
                                                    fontWeight: 700
                                                }}>${item.price}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{color: green[900]}}>Quantity</TableCell>
                                                <TableCell sx={{color: green[900], fontWeight: 700}}>
                                                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                        {/*Decrement button */}
                                                        <IconButton
                                                            onClick={() => handleDecrease(item.id)}
                                                            disabled={item.quantity <= minCount}
                                                            sx={{fontSize: '20px', color: green[900]}}
                                                        >
                                                            <RemoveIcon/>
                                                        </IconButton>

                                                        <Typography
                                                            variant="h7"
                                                            sx={{
                                                                mx: 2, // Horizontal margin between buttons
                                                                fontWeight: 700,
                                                                color: green[900],
                                                                minWidth: '30px', // Ensures that the quantity has a consistent width
                                                                textAlign: 'center',
                                                                border:'1px solid green'
                                                            }}
                                                        >
                                                            {item.quantity}
                                                        </Typography>

                                                        {/*Increment button*/}
                                                        <IconButton
                                                            onClick={() => handleIncrease(item)}
                                                            disabled={item.quantity >= maxCount}
                                                            sx={{fontSize: '20px', color: green[900]}}
                                                        >
                                                            <AddIcon/>
                                                        </IconButton>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell sx={{color: green[900]}}>Item Subtotal</TableCell>
                                                <TableCell sx={{
                                                    color: green[900],
                                                    fontWeight: 700
                                                }}>${subtotalEachItem(item.price, item.quantity)}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', mt: 2}}>
                <Button
                    variant="contained"
                    sx={{
                        fontWeight: 700,
                        width: '80%',
                        backgroundColor: lightGreen[200],
                    }}
                >
                    Update cart
                </Button>
            </Box>
        </Box>
    );
}
