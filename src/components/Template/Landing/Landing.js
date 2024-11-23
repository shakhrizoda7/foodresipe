import React from 'react';
import heroImg from './Hero image.png';
import { Box, Typography } from '@mui/material';
import { useSearch } from '../SearchContext';
import { LandingStyled } from './LandingStyled';

export default function Landing() {
  const { search, setSearch } = useSearch();

  return (
    <LandingStyled>
      <Box className='bgOpacity'></Box>

      <img src={heroImg} className='heroImg' />

      <Typography variant='h4' className='brandSologan'>Discover Delicious Recipes in Seconds, <br />Find Your Perfect Recipe Now!</Typography>

      <Box className='searchForm'>
          <input type="text" className='searchFood' placeholder='Search recipe...' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <button className="searchBtn"><i class="bi bi-search"></i></button>
      </Box>
    </LandingStyled>
  )
}
