import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import CustomBtn from '@/components/CustomBtn';
import CustomAppBar from '@/components/CustomAppBar';
import CoverImage from '@/components/CoverImage';
import CustomButtomNav from '@/components/CustomButtomNav';
import BottomDrawer from '@/components/BottomDrawer';
import CustomButtomNavBar from '@/components/CustomButtomNavBar';
import Carousel from '@/components/Carousel';
import Style from '../style.module.css'
export default function Home() {
  return (
    <Container maxWidth="lg">
      {/* <CustomBtn></CustomBtn>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App Router example in JavaScript
        </Typography>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box> */}
      {/* <CustomAppBar></CustomAppBar> */}
      <CoverImage></CoverImage>
      {/* <CoverImage></CoverImage>

      <CoverImage></CoverImage> */}
      <BottomDrawer></BottomDrawer>
      {/* <CustomButtomNavBar></CustomButtomNavBar> */}
      <Box sx={{
        p: 4, mb: 4
      }}>
        <Carousel></Carousel>
      </Box>
    </Container>
  );
}
