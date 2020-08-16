import React, { useEffect } from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Imgs from '../components/Imgs.jsx';
import Pags from '../components/Pags.jsx';
import { Container, Typography, List, ListItem } from '@material-ui/core';

const Reforzando = () => {

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, []);

    return (
        <>
            <Nav color="tomato" />
            <Banner label="Reforzando" />
            <Container maxWidth="sm">
                <Typography
                    variant="h4"
                    align="center"
                    style={{ margin: '20px 0' }}
                >Reforzando lo aprendido con ejemplos prácticos y nuevas etiquetas</Typography>
                <Typography variant="subtitle1" align="justify">
                    Aunque no lo crean, ya estan bastante avanzados en este lenguaje HTML5, pero no debemos quedarnos aqui, sigamos avanzando, en ésta lección veremos nuevas etiquetas y algunos ejemplos prácticos para que puedan practicar en sus editores.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">La etiqueta DIV</Typography>
                <Typography variant="subtitle1" align="justify">
                    Si ustedes analizan el código fuente de cualquier página web con CTRL+U o haciendo click derecho, en la opción "ver código fuente de la página" podrán ver su código HTML. Intentenlo con alguna página en la internet y veran muchas etiquetas <b>{`<div>`}</b>. Estas son basicamente "cajas" con otras etiquetas dentro. Cuando se tiene un código muy grande se hace uso de estas "cajas" para fraccionarlo y poder controlarlo mejor. Veamos un ejemplo.
                </Typography>
                <Imgs url="https://fotos.subefotos.com/c357e5a1a18d74d2430fa0c7a731e16co.png" desc="Código desordenado y dificil de leer" />
                <Typography variant="subtitle1" align="justify">
                    Como pueden observar, el código de la imágen está muy desordenado y eso que es un código pequeño. Imaginense un código real de 500 etiquetas todas mezcladas y desorganizadas, ¡un desastre! Ahora vean el siguiente ejemplo.
                </Typography>
                <Imgs url="https://fotos.subefotos.com/d5eb6b813f16651a7657eadf69d18802o.png" desc="Código más limpio con etiquetas Div" />
                <Typography variant="subtitle1" align="justify">
                    Hemos fraccionado el código en pequeñas porciones utilizando etiquetas <b>{`<div>`}</b> haciendo que sea más fácil de controlar y más facil de analizar. Organizar el código de ésta forma nos será de mucha utilidad en el futuro cuando aprendamos CSS y Javascript, pero es bueno que desde ahora comienzen a estructurar sus documentos web así.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Algunas etiquetas de texto</Typography>
                <Typography variant="subtitle1" align="justify">
                    Estas son algunas etiquetas que les ayudarán a la hora de escribir texto :
                </Typography>
                <List style={{ padding: '10px', background: 'tomato', color: 'white', borderRadius: '5px' }}>
                    <ListItem button>
                        <Typography><b>{`<b></b>`}</b> : Es para poner una palabra o frase en negrita, por ejemplo <b> {`<b>ESTO ESTA EN UNA ETIQUETA Bold</b>`}</b>.</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography><b>{`<br>`}</b> : De la palabra "break", se utiliza para generar un salto de línea, es como si apretaramos la tecla "ENTER".</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography><b>{`<i></i>`}</b> : Cualquier texto dentro se convertirá en "Italica", por ejemplo <i>{`<i>Esto está en una etiqueta Italica</i>`}</i></Typography>
                    </ListItem>
                </List>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Listas organizadas y no organizadas</Typography>
                <Typography variant="subtitle1" align="justify">
                    Al crear una página web, llegará un punto en el que nos veremos en la nesesidad de enumerar objetos o crear un listado con "items" para una visualización mejor de cierta cantidad de datos. Para eso existen las "Listas". Veamos un ejemplo.
                </Typography>
                <pre>
                    {`
            <div>
                <h3>Lista de compras</h3>
                <ol>
                    <li>Tomates : $30/kilo</li>
                    <li>Sandia : $25/kilo</li>
                    <li>Aguacates : $50/kilo</li>
                    <li>Manzanas : $15/kilo</li>
                    <li>Naranjas : $20/kilo</li>
                </ol>
            </div>`}
                </pre>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <h3>Lista de compras</h3>
                    <ol>
                        <li>Tomates : $30/kilo</li>
                        <li>Sandia : $25/kilo</li>
                        <li>Aguacates : $50/kilo</li>
                        <li>Manzanas : $15/kilo</li>
                        <li>Naranjas : $20/kilo</li>
                    </ol>
                </div>
                <Typography variant="subtitle1" align="justify">
                    Como pueden observar, generamos una lista "organizada" que quiere decir "enumerada", y la etiqueta que la creo fue <b>{`<ol>`}</b>(organized list). Dentro de esa etiqueta tenemos los <b>{`<li>`}</b>(list item), en donde cada uno es un "item" de esa lista. Ahora veremos como se genera una lista "no organizada".
                </Typography>
                <pre>
                    {`
                    <div>
                        <h3>Lista para santa</h3>
                        <ul>
                            <li>Quiero un pastel de chocolate</li>
                            <li>Quiero una pelota</li>
                            <li>Quiero un Triciclo</li>
                            <li>También una motocicleta</li>
                            <li>Y una consola de videojuegos</li>
                        </ul>
                    </div>
                    `}
                </pre>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <h3>Lista para santa</h3>
                    <ul>
                        <li>Quiero un pastel de chocolate</li>
                        <li>Quiero una pelota</li>
                        <li>Quiero un Triciclo</li>
                        <li>También una motocicleta</li>
                        <li>Y una consola de videojuegos</li>
                    </ul>
                </div>
                <Typography variant="subtitle1" align="justify">
                    Podemos hacer cosas interesantes con las listas como agregarle hypervínculos a cada <b>{`<li>`}</b>. Se preguntarán ¿Qué son los hypervínculos? Pues son los famosos "Links", unos textos que cuando les haces click te llevan a otra página. Los hypervínculos se crean con etiquetas <b>{`<a href="AQUI VA LA PAGINA HACIA DONDE QUIERES Q TE LLEVE">AQUI VA EL TEXTO</a>`}</b>. El atributo "href" puede recibir como parámetro(o valor) una dirección de la web, local o una almohadilla "#", significando ésta última que el hypervínculo no ira a ninguna parte. Veamos un ejemplo de una lista con hypervínculos.
                </Typography>
                <pre>
                    {`
                    <div>
                        <h3>Lista con Hypervínculos o Links</h3>
                        <ul>
                            <li>
                                <a href="google.com"> si me haces click iras a google.com</a>
                            </li>
                            <li>
                                <a href="youtube.com"> si quieres ir a youtube clickeame!!</a>
                            </li>
                            <li>
                                <a href="gmail.com">Visita tu correo Gmail!!</a>
                            </li>
                            <li>
                                <a href="#">Si me haces click volverás a esta página</a>
                            </li>
                        </ul>
                    </div>
                    `}
                </pre>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <h3>Lista con Hypervínculos o Links</h3>
                    <ul>
                        <li>
                            <a href="google.com"> si me haces click iras a google.com</a>
                        </li>
                        <li>
                            <a href="youtube.com"> si quieres ir a youtube clickeame!!</a>
                        </li>
                        <li>
                            <a href="gmail.com">Visita tu correo Gmail!!</a>
                        </li>
                        <li>
                            <a href="#">Si me haces click volverás a esta página</a>
                        </li>
                    </ul>
                </div>
                <Typography variant="subtitle1" align="justify">
                    Este tipo de listas con hypervínculos se usan para crear las barras de navegación en la etiqueta <b>{`<nav>`}</b> que está en la parte del <b>Header</b> del documento.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Tablas</Typography>
                <Typography variant="subtitle1" align="justify">
                    Las listas se usan para organizar los datos de una forma rápida y sencilla, pero si nesesitamos organizar datos de una forma más estructurada y compleja se utilizan las <b>Tablas</b>. Una "Tabla" es una estructura de datos organizados en columnas y filas. Por ejemplo, ésto es una tabla.
                </Typography>
                <Imgs url="https://basesdedatosi.files.wordpress.com/2014/01/tabla1.png" desc="Tabla de datos de personas" />
                <Typography variant="subtitle1" align="justify">
                    Analizando la imágen, podremos darnos cuenta que las columnas son los campos(tipo de información : identifiación, nombre, apellido, etc...), y las filas representan cada una de las personas, es decir, que una fila completa es una sola persona, y los datos de "esa persona" están separados en sus campos correspondientes. Una vez entendido qué son las "Tablas", pasaremos a crearlas en HTML. Imaginemos que tenemos 5 equipos de fútbol(Barcelona, Real Madrid, Inter, Milan y Liverpool). Nos piden crear una tabla en donde se pueda ver las victorias, derrotas, empates y los puntos totales de cada equipo. Haremos lo siguiente :
                </Typography>
                <pre>
                    {`
                <table>
                    <thead>
                        <tr>
                            <td>Equipo</td>
                            <td>Victorias</td>
                            <td>Empates</td>
                            <td>Derrotas</td>
                            <td>Puntos Totales</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Barcelona</td>
                            <td>10</td>
                            <td>1</td>
                            <td>3</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td>Real Madrid</td>
                            <td>10</td>
                            <td>3</td>
                            <td>5</td>
                            <td>130</td>
                        </tr>
                        <tr>
                            <td>Inter</td>
                            <td>8</td>
                            <td>4</td>
                            <td>5</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Milan</td>
                            <td>7</td>
                            <td>4</td>
                            <td>4</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Liverpool</td>
                            <td>5</td>
                            <td>5</td>
                            <td>7</td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
                    `}
                </pre>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <table>
                        <thead>
                            <tr>
                                <td>Equipo</td>
                                <td>Victorias</td>
                                <td>Empates</td>
                                <td>Derrotas</td>
                                <td>Puntos Totales</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Barcelona</td>
                                <td>10</td>
                                <td>1</td>
                                <td>3</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>Real Madrid</td>
                                <td>10</td>
                                <td>3</td>
                                <td>5</td>
                                <td>130</td>
                            </tr>
                            <tr>
                                <td>Inter</td>
                                <td>8</td>
                                <td>4</td>
                                <td>5</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Milan</td>
                                <td>7</td>
                                <td>4</td>
                                <td>4</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td>Liverpool</td>
                                <td>5</td>
                                <td>5</td>
                                <td>7</td>
                                <td>50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Typography variant="subtitle1" align="justify">
                    No se asusten, puede parecer muy complicado al principio, pero si analizamos el código parte por parte como dijo nuestro amigo "Jack", podrán crear sus propias tablas y hacerlas aún más complejas. El nombre de la etiqueta principal, la que genera la tabla es muy intuitivo <b>Table</b>, dentro de esta hay 2 secciones, <b>Thead</b>(Cabecera) y <b>Tbody</b>(Cuerpo). ¿No les recuerda algo esa estructura? Si, es igual a la estructura de un documento HTML. En la cabecera <b>Thead</b> ira una sola fila <b>Tr</b>(Table Row) la cual contendrá 5 columnas(campos) donde cada campo es el nombre del dato que nesesita(Victorias, derrotas, puntos, etc...) en etiquetas <b>Td</b>(Table Data). ¿No era tan complicado verdad?, las filas son <b>Tr</b> y en las filas hay <b>Td</b> que son las columnas. Sabiendo esto nos será fácil analizar la sección <b>Tbody</b> porque es igual. Cada <b>Tr</b>(Fila) representa un equipo, y ese equipo tiene 5 datos que iran cada uno en su columna correspondiente <b>Td</b>.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Conclusión</Typography>
                <Typography variant="subtitle1" align="justify">
                    Puede parecer muy engorroso y pesado tanta información junta(Listas, Hypervínculos, Tablas, etc...). Por eso les recomiendo que se tomen un descanso y lo vuelvan a leer al otro dia, practicando con el editor de código, creando de a poco sus propias páginas web, nadie los apura, tienen todo el tiempo que quieran. Les recuerdo que HTML5 es solo el principio del mundo de la internet, aún falta mucho por aprender y yo creo que ustedes podrán lograrlo y ser los mejores programadores web del mundo. Cuando logren asimilar e interiorizar todo lo que hemos visto hasta ahora, los invito a la siguiente lección, en la cuál veremos elementos multimedia como videos, audios e imagenes.
                </Typography>
                <Pags prev="/html5/estructura2" next="/html5/multimedia" />
            </Container>
        </>
    )
}
export default Reforzando;