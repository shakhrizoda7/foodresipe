import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { FooterStyled } from './FooterStyled';

export default function Footer() {
  return (
    <FooterStyled>
        <Box className="logo">
            <Link to={'/'}><h4>Delicious Recipes</h4></Link>
        </Box>

        <p className='brandSlogan'><i>Discover Delicious Recipes in Seconds</i></p>
    </FooterStyled>
  )
}
