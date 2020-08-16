import React, { useEffect } from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Imgs from '../components/Imgs.jsx';
import Pags from '../components/Pags.jsx';
import { Container, Typography } from '@material-ui/core';

const Estructura2 = () => {

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, []);

    return (
        <>
            <Nav color="tomato" />
            <Banner label="Estructura 2" />
            <Container maxWidth="sm">
                <Typography
                    variant="h4"
                    align="center"
                    style={{ margin: '20px 0' }}
                >Profundizando en la estructura HTML</Typography>
                <Typography variant="subtitle1" align="justify">
                    Conociendo la estructura básica de una página web, que es una etiqueta <b>HTML</b> englobando <b>Head</b> (cabecera del documento) y <b>Body</b> (cuerpo del documento), podrán comprender mejor cómo esta compuesta una estructura más avanzada, que es la que se usa en las páginas reales, pero bueno, abran su editor y pongamonos a escribir código.
                </Typography>
                <Imgs url="https://fotos.subefotos.com/13419e1334cce9025e4c592bbe07f63ao.png" desc="Estructura avanzada" />
                <Typography variant="subtitle1" align="justify">
                    Vamos por partes dijo nuestro amigo Jack. la etiqueta <b>{`<!DOCTYPE>`}</b> con su atributo "html" le indica al navegador, cual es la versión de <b>HTML</b> que se está utilizando, en nuestro caso es la 5. Pasemos a la estructura de la etiqueta <b>Body</b>, la cual esta dividida en 3 partes : <b>header</b>, <b>main</b> y <b>footer</b>.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Header</Typography>
                <Typography variant="subtitle1" align="justify">
                    En esta parte va el encabezado del documento, como una barra de navegación, un titulo principal, un banner o un slider de imagenes por ejemplo. Vemos que dentro hay una etiqueta <b>{`<nav>`}</b> la cual se usa para crear una barra de navegación. Ustedes pueden construir su página web como deseen, pero si la estructuran de ésta manera, los buscadores como "Google" , "Bing" o "Index" posicionarán sus páginas en posiciones más ventajosas.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Main</Typography>
                <Typography variant="subtitle1" align="justify">
                    <b>Main</b> es el cuerpo del documento, que a su vez está dividido en secciones, que a su vez están divididas en artículos. Pueden imaginarlo como cuando leen un perdiódico. El periódico tiene su encabezado, tiene su cuerpo, en donde está la mayor parte de la información, y tiene un pie de página "footer". En el <b>Main</b> de un documento van las <b>Sections</b> (secciones), las cuales dividen el cuerpo del documento en partes como "sección de noticias", "sección de galería de fotos" o "sección de comentarios", etc... en cada sección existen los <b>Articles</b> (artículos), que son las partes mínimas de una sección, por ejemplo, en la lección anterior creamos un pequeño artículo de una noticia que contenía un título, una imagen y una descripción.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Footer</Typography>
                <Typography variant="subtitle1" align="justify">
                    Todo documento profesional deberá tener un pie de página, con algún tipo de información como por ejemplo los derechos copyright, algunas reglas de uso, sus redes sociales, o cualquier información que pueda considerarse "adicional". El <b>Footer</b> se posicionará en la parte más baja del documento.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Ejemplo de una página profesional</Typography>
                <Typography variant="subtitle1" align="justify">
                    No es objetivo de este curso que aprendan a estilizar los documentos, pero romperé un poco las reglas y les mostraré un ejemplo con ésta estructura un poco más real utilizando el atributo <b>Style</b>.
                </Typography>
                <pre>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estructura Avanzada</title>
</head>
<body style="margin:0; padding:0">
    
    <header>
        <nav style="padding:5px; box-shadow: 0 0 2px 2px dimgrey; background-color: dodgerblue;">
            <h1 style="text-align: center; color:white">Ejemplo práctico 2</h1>
        </nav>
    </header>

    <main>
        <section style="display:grid; grid-template-columns: 1fr 1fr;">
            <article style="display:flex; flex-direction: column; margin:0 10px;">
                <h4 style="text-align: center;">Pocho el perro acróbata</h4>
                <hr>
                <img height="300px" src="https://static3.hoy.es/www/pre2017/multimedia/noticias/201407/28/media/cortadas/parkour-perro--575x323.jpg" alt="perro acróbata">
                <p style="text-align: center;">Conozcan al "Pocho" el sorprendente perro acróbata que está siendo viral en las redes sociales y en youtube con su magnífico talento.</p>
            </article>
            <article style="display:flex; flex-direction: column; margin:0 10px;">
                <h4 style="text-align: center;">Gato ladrón</h4>
                <hr>
                <img height="300px" src="https://www.delabahia.com.ar/wp-content/uploads/2019/09/unsual-suspect-cat.jpg" alt="gato ladrón">
                <p style="text-align: center;">Gato ladrón encarcelado esperando su juicio, luego de haberle robado el almuerzo a la vecina y haberla dejado con hambre.</p>
            </article>
        </section>
    </main>

    <footer>
        <p style="padding: 5px; background-color:rgba(0,0,0,0.7); text-align:center; color:white; position:absolute; bottom:0; width:100%;">Derechos reservados por AndyTechIT, cualquier uso no autorizado por fuentes externas a este sitio no nos hará responsables.</p>
    </footer>

</body>
</html>`}
                </pre>
                <Imgs url="https://fotos.subefotos.com/ac15bc9bf6b539ce85c6a393740d120ao.png" desc="Resultado del código anterior" />
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Conclusión</Typography>
                <Typography variant="subtitle1" align="justify">
                    Exeptuando los atributos "Style", que sirven para estilizar el documento, todo lo demás deberían comprenderlo bien, ya que son solo etiquetas de texto e imágenes. Un documento web estructurado de ésta manera, tiene más chances de aparecer en los primeros lugares de un buscador como "Google", por lo tanto es una buena práctica que lo hagan asi. En la siguiente lección veremos algunas etiquetas más, luego haremos algunos ejemplos en el editor de código para reforzar lo aprendido.
                </Typography>
                <Pags prev="/html5/cuerpo" next="/html5/reforzando" />
            </Container>
        </>
    )
}

export default Estructura2;