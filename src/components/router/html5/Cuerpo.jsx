import React from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Imgs from '../components/Imgs.jsx';
import Pags from '../components/Pags.jsx';
import { Container, Typography, Grid } from '@material-ui/core';

const Cuerpo = () => {
    return(
        <>
            <Nav color="tomato" />
            <Banner label="Cuerpo"/>
        </>
    )
}

export default Cuerpo;