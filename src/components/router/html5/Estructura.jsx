import React, { useEffect } from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Imgs from '../components/Imgs.jsx';
import Pags from '../components/Pags.jsx';
import { Container, Typography, Grid } from '@material-ui/core';

const Estructura = () => {

    useEffect(() => {
        window.scroll({
            top:0,
            behavior:'smooth'
        })
    }, []);

    return (
        <>
            <Nav color="tomato" />
            <Banner label="Estructura" />
            <Container maxWidth="sm">
                <Typography
                    variant="h4"
                    align="center"
                    style={{ margin: '20px 0' }}
                >Estructura básica de un documento web</Typography>
                <Typography variant="subtitle1" align="justify">
                    Ahora que conocemos los componentes básicos que conforman el lenguaje HTML pasaremos a implementarlos en una página web real. Pero antes de comenzar a programar nesesitaremos un editor de texto, que puede ser el que mas les guste, inclusive el bloc de notas :). Personalmente les recomiendo alguno de estos :
                </Typography>
                <Grid container style={{ margin: '20px 0' }}>
                    <Grid item xs={6} md={3}>
                        <a href="https://code.visualstudio.com/" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <img style={{ width: '100%' }} src="https://code.visualstudio.com/assets/favicon.ico" alt="vsCode" />
                            <Typography variant="h6" align="center">Visual Studio Code</Typography>
                        </a>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <a href="https://www.sublimetext.com/" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <img style={{ width: '100%' }} src="https://www.macbed.com/wp-content/uploads/2019/02/80183.png" alt="SublimeText" />
                            <Typography variant="h6" align="center">Sublime Text</Typography>
                        </a>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <a href="http://brackets.io/" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <img style={{ width: '100%' }} src="https://lignux.com/wp-content/uploads/2014/07/brackets.png" alt="Braquets" />
                            <Typography variant="h6" align="center">Braquets</Typography>
                        </a>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <a href="https://notepad-plus-plus.org/downloads/" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <img style={{ width: '100%' }} src="https://www.ecured.cu/images/f/f5/Notepad_plus_plus.png" alt="Notepad++" />
                            <Typography variant="h6" align="center">Notepad ++</Typography>
                        </a>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" align="justify">
                    Esos son los 4 editores que más me han gustado por su sencillez y su interfáz gráfica agradable, pero como les dije antes, ustedes son libres de escoger el que más les guste, ya q al fin y al cabo todos hacen lo mismo "Editar texto". Comenzaremos a utilizarlo en la siguiente lección cuando veamos el cuerpo de un documento.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }}>Estructura HTML</Typography>
                <Imgs
                    url="https://carlosmbom.neocities.org/img/estructurahtml.jpg"
                    desc="Estructura básica de un documento HTML"
                />
                <Typography variant="subtitle1" align="justify">
                    Como vemos en la imágen, la etiqueta <b>{`<html></html>`}</b>, es la que engloba todas las demás, ésta le indica al navegador que todo lo q tiene dentro es un documento <b>HTML</b>. Dentro de ésta tenemos otras dos etiquetas muy importantes las cuales son <b>{`<head></head>`}</b> y <b>{`<body></body>`}</b>.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }}>La etiqueta head</Typography>
                <Imgs
                    url="https://www.computerhope.com/jargon/h/head.gif"
                    desc="Etiqueta Head"
                />
                <Typography variant="subtitle1" align="justify">
                    Dentro de la etiqueta <b>{`<head></head>`}</b> que sería la cabecera del documento, colocaremos toda la información descriptiva de la página, como podría ser el título mediante la etiqueta <b>{'<title>TÍTULO DE LA PÁGINA</title>'}</b>, los metadatos <b>{`<meta>`}</b> que son pequeños datos que ayudan al navegador a entender mejor nuestro documento como por ejemplo el formato de codificación de caractéres. Uno de los elementos mas importantes que se coloca dentro de <b>{`<head></head>`}</b> son los estilos CSS(los cuales sirven para estilizar el documento, pero eso lo veremos en otro curso) y las fuentes de texto.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }}>La etiqueta body</Typography>
                <Imgs
                    url="https://www.computerhope.com/jargon/h/body.gif"
                    desc="Etiqueta Body"
                />
                <Typography variant="subtitle1" align="justify">
                    Aquí comienza lo divertido del curso, ya que <b>{`<body></body>`}</b> representa el cuerpo del documento y en él pondremos toda la información visible al usuario, como pueden ser imágenes, videos, textos, botones, formularios, etc...
                    Es ésta etiqueta la que más nos interesa y en la que comenzaremos a profundizar en las siguientes lecciones.  
                </Typography>
                <hr/>
                <Typography variant="subtitle1">
                    No programamos nada interesante hasta ahora porque era muy nesesario que aprendan bien las bases de un documento HTML, pero a partir de la siguiente lección pondremos MANOS A LA OBRA y comenzaremos a agregar contenido "visual" para q el documento no se vea tan aburrido ;).
                </Typography>
                <Pags prev="/html5/intro" next="/html5/cuerpo"/>
            </Container>
        </>
    )
}

export default Estructura;