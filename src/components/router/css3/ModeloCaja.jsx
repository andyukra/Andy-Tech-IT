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

const useStyles = makeStyles({
    caja:{
        width:'100px',
        height:'100px',
        background:'red'
    },
    caja2:{
        width:'100px',
        height:'100px',
        background:'red',
        marginTop:'10px'
    }
});

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

    const sty = useStyles();

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
                >Comprendiendo el modelo de caja en CSS</Typography>
                <Typography variant="subtitle1" align="justify">
                    Imaginen que cada elemento o "etiqueta" HTML es una caja, la cual tiene un contenido(que puede ser un texto, una imagen, otra etiqueta, etc...). Por defecto, nosotros no podemos ver la caja, porque es invisible, pero debemos saber que está allí, conteniendo al dato que <b>sí</b> podemos ver. Analizandololo desde el punto de vista de <b>CSS</b>, La caja(etiqueta HTML) está compuesta basicamente por 4 partes o capas que son : <b>Contenido</b>(La informacion o dato que contiene la caja), <b>Padding</b>(o relleno de la caja), <b>Border</b>(El borde de la caja) y el <b>Margin</b>(el márgen).
                </Typography>
                <Imgs url="https://stuyhsdesign.files.wordpress.com/2015/10/box-model.png" desc="Modelo de caja en CSS"/>
                <Typography variant="subtitle1" align="justify">
                    En la imágen podemos visualizar un poco mejor todo eso que al principio parecía algo confuso. Ahora pasaré a explicar la utilidad que nos brinda, el comprender cómo funciona cada una de las partes o capas de la caja.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Margin</Typography>
                <Typography variant="subtitle1" align="justify">
                    El Margin(o márgen) es el <b>espacio</b> que separa a nuestra <b>caja</b> de los límites del documento o de otras cajas. Esto es muy útil para separar elementos entre sí, y que no esten todos pegados uno junto al otro.
                </Typography>
                <CodeTabs>
    <code>{`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Modelo de caja CSS</title>
    </head>
    <body>
        
        <div class="caja"></div>
        <div class="caja"></div>
        <div class="caja"></div>
        <div class="caja"></div>
    
    </body>
    </html>
    `}</code>
<code>{`
.caja {
    background-color: red;
    width:100px;
    height:100px;
}
`}</code>
                </CodeTabs>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <div className={sty.caja}></div>
                    <div className={sty.caja}></div>
                    <div className={sty.caja}></div>
                    <div className={sty.caja}></div>
                </div>
                <Typography variant="caption" align="center">4 etiquetas Div sin Márgenes</Typography>
                <hr/>
                <CodeTabs>
    <code>{`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Modelo de caja CSS</title>
    </head>
    <body>
        
        <div class="caja"></div>
        <div class="caja"></div>
        <div class="caja"></div>
        <div class="caja"></div>
    
    </body>
    </html>
    `}</code>
<code>{`
.caja {
    background-color: red;
    width:100px;
    height:100px;
    
    margin-top : 10px;
}
`}</code>
                </CodeTabs>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <div className={sty.caja2}></div>
                    <div className={sty.caja2}></div>
                    <div className={sty.caja2}></div>
                    <div className={sty.caja2}></div>
                </div>
                <Typography variant="caption" align="center">4 etiquetas Div Con Márgenes</Typography>
                <hr/>
            </Container>
        </>
    )
}

export default ModeloCaja;