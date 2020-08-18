import React, { useEffect } from 'react';
import winLoad from './helpers/OnLoad';
import styles from './helpers/estilos';
import { Grid, Box, Typography, Button, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

const useStyles = makeStyles(styles);

const Main = () => {

    useEffect(() => {
        winLoad.load();
    }, []);

    const sty = useStyles();

    return (
        <>
            <Grid container justify="center" alignItems="center" className={sty.html} id="html5">
                <Grid item xs={12} lg={7}>
                    <Box component="div">
                        <Typography variant="h4" style={{ fontWeight: 'bold', margin: '30px 0' }}>Curso introductorio de HTML5</Typography>
                        <Typography variant="subtitle1" align="justify" style={{ fontSize: '20px' }}>
                            En este curso veremos las bases de HTML5, un lenguaje de etiquetas usado para representar contenido en una web, como puede ser videos, textos, imágenes, audios, etc...
                            Paso a paso iremos comprendiendo y analizando cada etiqueta mediante ejemplos prácticos, y al final del curso usted será capaz de insertar cualquier tipo de contenido en una página web.
                    </Typography>
                    </Box>
                    <Grid container justify="space-around" alignItems="center" className={sty.iconDesc}>
                        <Grid item style={{ color: 'white', textAlign: 'center' }}>
                            <AccessTimeIcon style={{ fontSize: '45px' }} />
                            <Typography>Rápido</Typography>
                        </Grid>
                        <Grid item style={{ color: 'white', textAlign: 'center' }}>
                            <AttachMoneyIcon style={{ fontSize: '45px' }} />
                            <Typography>Gratis</Typography>
                        </Grid>
                        <Grid item style={{ color: 'white', textAlign: 'center' }}>
                            <SentimentVerySatisfiedIcon style={{ fontSize: '45px' }} />
                            <Typography>Sencillo</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        id="html5Logo"
                        src="https://lineadecodigo.com/wp-content/uploads/2014/04/html5.png"
                        alt="html5 Logo"
                        style={{ transform: 'scale(0)', transition: '0.5s ease-out' }}
                    />
                </Grid>
            </Grid>
            <Grid container style={{flexDirection:'row-reverse'}} justify="center" alignItems="center" className={sty.css} id="css">
                <Grid item xs={12} lg={7} style={{ margin: '30px 0' }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                        Curso introductorio de CSS3
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontSize: '20px' }} align="justify">
                        Una vez que se ha familiarizado con el lenguaje HTML5, ya sabrá como colocar datos en un documento mediante una estructura de etiquetas, pero...no les parece que esos datos se ven un poco aburridos, sin color, ni margenes, mal posicionados, etc...? Pues es hora de aprender a estilizar el contenido con este fabuloso lenguaje llamado "CSS" del ingles "Cascading Style Sheets (hojas de estilo en cascada)". Basicamente este lenguaje se usa para darle estilos a las etiquetas de HTML5, dandoles color, posicionandolos, rotandolos, ajustando sus tamaños, creando animaciones, entre muchas otras cosas que veremos durante el curso.
                    </Typography>
                    <Grid container justify="space-around" alignItems="center" className={sty.iconDesc2}>
                        <Grid item style={{ color: 'white', textAlign: 'center' }}>
                            <AccessTimeIcon style={{ fontSize: '45px' }} />
                            <Typography>Algo rápido</Typography>
                        </Grid>
                        <Grid item style={{ color: 'white', textAlign: 'center' }}>
                            <AttachMoneyIcon style={{ fontSize: '45px' }} />
                            <Typography>Gratis</Typography>
                        </Grid>
                        <Grid item style={{ color: 'white', textAlign: 'center' }}>
                            <SentimentSatisfiedIcon style={{ fontSize: '45px' }} />
                            <Typography>Algo sencillo</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        id="cssLogo"
                        src="https://cdn.iconscout.com/icon/free/png-256/css3-8-1175200.png"
                        alt="css3 logo"
                        style={{ transform: 'scale(0)', transition: '0.5s ease-out' }}
                    />
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" className={sty.js} id="js">
                <Grid item xs={12} lg={7}>
                    <Box component="div">
                        <Typography variant="h4" style={{ fontWeight: 'bold', margin: '30px 0' }}>Curso introductorio de Javascript</Typography>
                        <Typography variant="subtitle1" style={{ fontSize: '20px' }} align="justify">
                            Ahora que ya sabemos insertar contenido en una página web mediante etiquetas y sabemos como estilizar esos elementos mediante código CSS, seguramente se estarán preguntando ¿Cómo dotar la página con funcionalidad?, ¿Cómo hacer que los botones hagan cosas, cómo validar formularios o cómo lograr más interacción con el usuario? La respuesta a sus preguntas es una sola palabra "Javascript". Javascript es un lenguaje de programación que sirve para insertar "lógica" a un página web, no es de los lenguajes más faciles de aprender, pero es muy potente y conociendolo bien, podrán hacer cosas sorprendentes, no hay límites para la creatividad.
                    </Typography>
                    </Box>
                    <Grid container justify="space-around" alignItems="center" className={sty.iconDesc3}>
                        <Grid item style={{ color: 'white', textAlign: 'center' }}>
                            <AccessTimeIcon style={{ fontSize: '45px' }} />
                            <Typography>Lleva tiempo</Typography>
                        </Grid>
                        <Grid item style={{ color: 'white', textAlign: 'center' }}>
                            <AttachMoneyIcon style={{ fontSize: '45px' }} />
                            <Typography>Gratis</Typography>
                        </Grid>
                        <Grid item style={{ color: 'white', textAlign: 'center' }}>
                            <SentimentDissatisfiedIcon style={{ fontSize: '45px' }} />
                            <Typography>Algo complejo</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        id="jsLogo"
                        src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
                        alt="js Logo"
                        style={{ transform: 'scale(0)', transition: '0.5s ease-out' }}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Main;