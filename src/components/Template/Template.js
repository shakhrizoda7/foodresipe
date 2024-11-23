import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';
import { SearchProvider } from './SearchContext';
import Footer from './Footer/Footer';
import ResipeCard from './ResipeCard/ResipeCard';

const TemplateStyled = styled.div``;

export default function Template() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <TemplateStyled>
        <SearchProvider>
            <section>

                <header>
                    <Header/>
                </header>

                <main>
                    <Outlet/>
                    {isLandingPage && <ResipeCard />}
                </main>

                <footer>
                    <Footer/>
                </footer>
            </section>
        </SearchProvider>
    </TemplateStyled>
  )
}
