import React, { useEffect } from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Imgs from '../components/Imgs.jsx';
import Pags from '../components/Pags.jsx';
import CodeTabs from '../components/CodeTabs.jsx';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import ArrowIcon from '@material-ui/icons/ExpandLess';

const ModeloCaja = () => {

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
        <>
            <Fab onClick={fabHandler} style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: '500' }} color="secondary">
                <ArrowIcon />
            </Fab>
            <Nav color="steelblue" />
            <Banner url="https://media.vlpt.us/images/jakeseo_me/post/7492518b-f81c-4ebe-be44-a40f2af5064c/css%20shield.png" label="Modelo de caja" />
            <Container maxWidth="sm">
                <Typography
                    variant="h4"
                    align="center"
                    style={{ margin: '20px 0' }}
                >Proximamente...</Typography>
            </Container>
        </>
    )
}

export default ModeloCaja;