import React, { useEffect } from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Imgs from '../components/Imgs.jsx';
import Pags from '../components/Pags.jsx';
import { Container, Typography } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import ArrowIcon from '@material-ui/icons/ExpandLess';

const IntroCSS = () => {

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
            <Banner label="Introducción" url="https://media.vlpt.us/images/jakeseo_me/post/7492518b-f81c-4ebe-be44-a40f2af5064c/css%20shield.png" />
            <Container maxWidth="sm">
                <Typography
                    variant="h4"
                    align="center"
                    style={{ margin: '20px 0' }}
                >Bienvenidos al curso introductorio de CSS3</Typography>
                <Typography variant="subtitle1" align="justify">
                    Les doy la bienvenida a este curso introductorio de CSS3, en donde veremos cómo estilizar las etiquetas HTML, para que se vean más interesantes. Antes de seguir este curso tienen que conocer bien los fundamentos del lenguaje HTML5, si no es así, pueden encontrar el <b>Curso introductorio de HTML5</b> en el menú de cursos de éste sitio, el cual es totalmente gratuito.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Comenzando</Typography>
                <Typography variant="subtitle1" align="justify">
                    CSS(Cascading Style Sheets) es un lenguaje basado en propiedades y valores, es decir, que cada propiedad tendrá asignado un valor, por ejemplo :
                </Typography>
                <pre>
                    {`color : red`}
                </pre>
                <Typography variant="subtitle1" align="justify">
                    La propiedad <b>Color</b> tiene un valor <b>Red</b>. Imaginen cuando se construye una casa desde cero, se coloca el suelo, se levantan las paredes, se coloca un techo, etc...(HTML), queda feo asi todo color ladrillo y cemento, por lo tanto se nesesita aplicar ciertos <b>Estilos</b>, como el <b>"Color de las paredes : celeste"</b>, <b>"diseño de los azulejos : rombitos"</b>, <b>"Posición de las lámparas : centro"</b>, y así, estilizando parte por parte, como dijo "Jack", se llega a una casa bonita y con estilo.
                </Typography>
                <Imgs url="https://res.cloudinary.com/practicaldev/image/fetch/s--5EyScZbp--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/q3xa7ii9iei1b8kvs451.jpg" desc="Css Lenguaje de Propiedades y Valores" />
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Conclusión</Typography>
                <Typography variant="subtitle1" align="justify">
                    CSS es un lenguaje que toma cada etiqueta HTML y la va estilizando mediante propiedades, como color, posición, altura, anchura, etc...Hasta que quede como queramos. En la siguiente lección veremos de qué manera, CSS, logra acceder a cada etiqueta HTML, para darle estilos, también veremos varias formas de conectar estos dos lenguajes entre sí.
                </Typography>
                <Pags prev="/" next="/css3/selectores" />
            </Container>
        </>
    )
}

export default IntroCSS;