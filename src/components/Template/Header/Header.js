import React from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../SearchContext';
import { Box } from '@mui/material';
import { HeaderStyled } from './HeaderStyled';

export default function Header() {
  const {search, setSearch} = useSearch();

  return (
    <HeaderStyled>
        <Box className="headerDiv">
            <Box className="logo">
                <Link to={'/'}><h4>Delicious Recipes</h4></Link>
            </Box>

            <Box className='searchForm'>
                <input type="text" className='searchFood' placeholder='Search recipe...' value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="searchBtn"><i class="bi bi-search"></i></button>
            </Box>
        </Box>
    </HeaderStyled>
  )
}
