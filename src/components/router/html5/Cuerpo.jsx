import React, { useEffect } from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Imgs from '../components/Imgs.jsx';
import Pags from '../components/Pags.jsx';
import { Container, Typography, List, ListItem, ListSubheader } from '@material-ui/core';

const Cuerpo = () => {

    useEffect(() => {
        window.scroll({
            top:0,
            behavior:'smooth'
        })
    }, []);

    return (
        <>
            <Nav color="tomato" />
            <Banner label="Cuerpo" />
            <Container maxWidth="sm">
                <Typography
                    variant="h4"
                    align="center"
                    style={{ margin: '20px 0' }}
                >Agregando contenido al cuerpo del documento</Typography>
                <Typography variant="subtitle1" align="justify">
                    Repasando un poco lo que vimos en la lección anterior, las dos etiquetas más importantes de una página web son <b>{`<head>`}</b> (la cual contiene toda la información del documento, como el título, los metadatos, las fuentes de texto, los estilos...etc) y la etiqueta <b>{`<body>`}</b> en donde van todos los datos visuales. En ésta lección vamos a crear una pequeña página de noticias agregandole contenido a la etiqueta <b>body</b>.
                </Typography>
                <Imgs url="https://fotos.subefotos.com/963e2bfa10e8bc027c01dfb4416bb8fdo.png" desc="Ejemplo de código nº1" />
                <Typography variant="subtitle1" align="justify">
                    Cómo pueden ver en la etiqueta <b>Head</b> Tenemos un <b>Meta</b> indicandole al navegador qué tipo de codificación de caractéres utilizamos, y el título del documento. En el cuerpo, o mas bien en la etiqueta <b>Body</b> insertamos algunas etiquetas de contenido que veremos más adelante. Escriban ese código en sus editores, y guardenlo con la extensión ".html" (yo lo nombré "lalala.html", porque soy muy creativo con los nombres). Una vez el documento guardado, si lo abrimos normalmente haciendole doble click, veremos algo parecido a ésto :
                </Typography>
                <Imgs url="https://fotos.subefotos.com/c0efd77d6ab3456c0050a1ea7e508858o.png" desc="Resultado del ejemplo de código nº1" />
                <Typography variant="subtitle1" align="justify">
                    Se ve bastante fea nuestra primer página de noticias, lo se, pero lo importante es que ya estamos agregando datos visuales al documento. Ahora les explicaré brevemente la función de cada una de las etiquetas que utilizamos, como dijo Jack el destripador, "Vamos por partes".
                </Typography>
                <List style={{ padding: '10px', background: 'tomato', color: 'white', borderRadius: '5px' }}>
                    <ListItem button>
                        <Typography><b>{`<h1>`}</b> : Se usa para encabezados o titulares, y van desde el <b>h1</b> hasta el <b>h6</b></Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography><b>{`<p>`}</b> : Aqui van los párrafos o texto normal, como ven son textos más pequeños.</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography><b>{`<hr>`}</b> : Una línea separadora, muy útil para separar elementos entre si, no tiene cierre.</Typography>
                    </ListItem>
                </List>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Atributos de las etiquetas</Typography>
                <Typography variant="subtitle1" align="justify">
                    Se preguntarán, ¿Y la etiqueta <b>img</b>?. Bueno, aqui viene un tema muy importante que son los "atributos". Si observan el código que usaron podrán notar que la etiqueta <b>{`<img>`}</b> posee dos atributos, "src"(source o recurso) y "alt"(texto alternativo). Estos atributos complementan la etiqueta dandole información adicional. Por ejemplo, el atributo "src" recibe una dirección (que puede ser web o local) desde donde tomará la imágen para luego colocarla en el documento. Si no se especifica una dirección en el atributo "src", la etiqueta no sabrá de dónde obtener una imágen y simplemente colocara el texto que haya en la etiqueta "alt" que es un texto alternativo. Cada etiqueta tiene sus propios atributos y los iremos viendo poco a poco más adelante.
                </Typography>
                <hr />
                <Typography variant="subtitle1" align="justify">Ya conocemos la estructura básica de un documento html y cómo funcionan las etiquetas y sus atributos. En la siguiente lección veremos una estructura HTML real, que es un poquito más compleja, pero como ustedes son tan inteligentes la podrán dominar en poco tiempo, nos vemos en la próxima lección.</Typography>
                <Pags prev="/html5/estructura" next="/html5/estructura2" />
            </Container>
        </>
    )
}

export default Cuerpo;