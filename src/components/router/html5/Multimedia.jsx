import React from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Imgs from '../components/Imgs.jsx';
import Pags from '../components/Pags.jsx';
import { Container, Typography, List, ListItem } from '@material-ui/core';

const Multimedia = () => {
    return(
        <>
            <Nav color="tomato" />
            <Banner label="Multimedia" />
        </>
    )
}

export default Multimedia;