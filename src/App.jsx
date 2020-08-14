import React from 'react';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import Footer from './components/footer/Footer.jsx';
import { CssBaseline } from '@material-ui/core';

const App = () => {
    return (
        <CssBaseline>
            <Header />
            <Main />
            <Footer />
        </CssBaseline>
    )
}

export default App;