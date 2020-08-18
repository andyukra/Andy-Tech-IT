import React, { useEffect } from 'react';
import Header from './header/Header.jsx';
import Main from './main/Main.jsx';
import Footer from './footer/Footer.jsx';
import { Fab } from '@material-ui/core';
import ArrowIcon from '@material-ui/icons/ExpandLess';

const Index = () => {

    const scrollTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        scrollTop();
    }, []);

    const fabHandler = () => scrollTop();

    return (
        <div>
            <Fab onClick={fabHandler} style={{position:'fixed', bottom:'2rem', right:'2rem', zIndex:'500'}} color="secondary">
                <ArrowIcon />
            </Fab>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Index;