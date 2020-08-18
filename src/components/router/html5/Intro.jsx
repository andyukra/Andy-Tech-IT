import React, { useEffect } from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Pags from '../components/Pags.jsx';
import { Typography, Container, List, ListItem } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import ArrowIcon from '@material-ui/icons/ExpandLess';

const Intro = () => {

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
            <Nav color="tomato" />
            <Banner label="Introducción" url="https://disenowebakus.net/imagenes/articulos/html5.jpg" />
            <Container maxWidth="sm">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>Introducción al asombroso mundo de HTML5</Typography>
                    <Typography variant="subtitle1" align="justify">
                        Cualquier página web está formada por 3 lenguajes (HTML, CSS y Javascript). Cada uno de ellos cumple una función específica en el documento, pero el más importante de los 3, el encargado de representar la información en el mismo, es el lenguaje HTML y lo hace mediante etiquetas.
                    </Typography>
                    <Typography variant="h6" style={{ margin: '20px 0 10px 0' }}>¿Qué es una etiqueta HTML?</Typography>
                    <Typography variant="subtitle1" align="justify">
                        Una etiqueta <b>HTML</b> es basicamente un contenedor de información. Según el "Tipo" de información o dato que se quiera representar en el documento, se usarán unos u otros contenedores. <b>HTML</b> tiene suficientes tipos de etiquetas para poder representar cualquier tipo de dato(videos, textos, musica, imágenes, códigos, etc...).
                    </Typography>
                    <Typography variant="h6" style={{ margin: '20px 0 10px 0' }}>Características de las etiquetas HTML</Typography>
                    <Typography variant="subtitle1">Todas las etiquetas <b>HTML</b> siguen la siguiente semántica :</Typography>
                    <img style={{ margin: '10px 0', boxShadow: '1px 1px 10px rgba(0,0,0,0.2)' }} src="https://upanama.e-ducativa.com/archivos/repositorio//6000/6207/html/etiq1.jpg" alt="etiquetas HTML" />
                    <Typography variant="subtitle1" align="justify">
                        Como pueden observar, cada etiqueta esta compuesta por una parte de apertura, la informción contenida(que tambien puede ser otra etiqueta), y una parte de cierre.
                    </Typography>
                    <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Algunas Etiquetas Básicas</Typography>
                    <List style={{ padding: '10px', background: 'tomato', color: 'white', borderRadius: '5px' }}>
                        <ListItem button>
                            <Typography><b>{`<video>`}</b> Sirve para insertar un video</Typography>
                        </ListItem>
                        <ListItem button>
                            <Typography><b>{`<img>`}</b> Sirve para insertar una imágen</Typography>
                        </ListItem>
                        <ListItem button>
                            <Typography><b>{`<p>`}</b> Sirve para insertar un texto</Typography>
                        </ListItem>
                        <ListItem button>
                            <Typography><b>{`<audio>`}</b> Sirve para insertar un audio</Typography>
                        </ListItem>
                        <ListItem button>
                            <Typography><b>{`<h1>`}</b> sirve para encabezados de artículos</Typography>
                        </ListItem>
                    </List>
                    <hr />
                    <Typography variant="subtitle1" align="justify">Sabiendo bien qué es una etiqueta y como podemos usarla, en la siguiente lección, veremos la estructura básica de una página web.</Typography>
                    <Pags prev="/" next="/html5/estructura" />
                </div>
            </Container>
        </>
    )
}

export default Intro;