import React, { useEffect } from 'react';
import Header from './header/Header.jsx';
import Main from './main/Main.jsx';
import Footer from './footer/Footer.jsx';

const Index = () => {

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, []);

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default Index;