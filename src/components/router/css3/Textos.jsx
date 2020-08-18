import React, { useEffect } from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Pags from '../components/Pags.jsx';
import CodeTabs from '../components/CodeTabs.jsx';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import ArrowIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles({
    encabezado: {
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: 'bold',
        color: 'red'
    },
    subencabezado: {
        textAlign: 'center',
        fontSize: '30px',
        color: 'orange'
    },
    parrafo1: {
        textAlign: 'justify',
        textIndent: '25px',
        textTransform: 'capitalize',
        fontSize: '20px',
        color: 'green'
    },
    parrafo2: {
        textAlign: 'right',
        fontStyle: 'italic',
        textDecoration: 'underlay',
        color: 'blue',
        fontSize: '18px'
    }
})

const Textos = () => {

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

    const sty = useStyles();
    return (
        <>
            <Fab onClick={fabHandler} style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: '500' }} color="secondary">
                <ArrowIcon />
            </Fab>
            <Nav color="steelblue" />
            <Banner url="https://media.vlpt.us/images/jakeseo_me/post/7492518b-f81c-4ebe-be44-a40f2af5064c/css%20shield.png" label="Textos" />
            <Container maxWidth="sm">
                <Typography
                    variant="h4"
                    align="center"
                    style={{ margin: '20px 0' }}
                >Estilizando Texto</Typography>
                <Typography variant="subtitle1" align="justify">
                    Muy bien, ahora que sabemos cómo seleccionar etiquetas HTML, pongamonos a jugar un poco con ellas. Pero antes observen esta tabla con algunas propiedades <b>CSS</b> para textos.
                </Typography>
                <TableContainer component={Paper} style={{ margin: '20px 0' }}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ background: 'rgba(0,0,0,0.8)' }}>
                                <TableCell style={{ color: 'white' }} align="left">Propiedad</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Algunos Valores</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Descripción</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">font-size</TableCell>
                                <TableCell align="right">tamaño en píxeles</TableCell>
                                <TableCell align="right">Tamaño del texto</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">font-weight</TableCell>
                                <TableCell align="right">normal | bold | bolder</TableCell>
                                <TableCell align="right">Ancho del texto</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">font-family</TableCell>
                                <TableCell align="right">Roboto | sans serif | arial</TableCell>
                                <TableCell align="right">Tipo de fuente</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">font-style</TableCell>
                                <TableCell align="right">normal | oblique | italic</TableCell>
                                <TableCell align="right">Inclinación del texto</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">text-align</TableCell>
                                <TableCell align="right">left|center|right|justify</TableCell>
                                <TableCell align="right">Alinea el texto</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">text-decoration</TableCell>
                                <TableCell align="right">none | overlay | underline</TableCell>
                                <TableCell align="right">Decoración del texto</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">text-transform</TableCell>
                                <TableCell align="right">capitalize | lowercase | uppercase</TableCell>
                                <TableCell align="right">Texto en mayusculas, minúsculas o capitales</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">text-indent</TableCell>
                                <TableCell align="right">tamaño en píxeles</TableCell>
                                <TableCell align="right">indentación al comienzo de un párrafo</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">color</TableCell>
                                <TableCell align="right">color en inglés|rgb|hexadecimal</TableCell>
                                <TableCell align="right">Color del texto</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Probando propiedades de texto</Typography>
                <Typography variant="subtitle1" align="justify">
                    Parece difícil de memorizar tantas propiedades y tantos valores, pero creanme, que a medida que las vayan utilizando en sus proyectos, poco a poco se iran grabando solas en la memoria y cada vez se hará más rapido programar, creo que de esa forma funciona cualquier cosa que estudiemos, pero bueno, abran sus editores de código, creen dos archivos, uno llamado "index.html" y otro "estilos.css". Guardenlos en una carpeta vacía, y pongamonos a escribir un poco de código para interiorizar todo lo q venimos viendo. Como selectores usaremos las <b>clases</b>.
                </Typography>
                <CodeTabs>
                    <code>{`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CSS Propiedades de texto</title>
        <link rel="stylesheet" href="estilos.css">
    </head>
    <body>
    
        <h1 class="encabezado">Encabezado del documento</h1>
        <br/><br/>
        <h2 class="subencabezado">Subencabezado</h2>
        <hr/>
        <p class="parrafo1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sit ipsum corrupti suscipit sint, iure perspiciatis odio itaque dignissimos porro consectetur quo ratione aliquid, impedit ea non, fugit nihil blanditiis beatae excepturi. Asperiores eius fugiat consequatur similique beatae voluptas at hic aperiam deleniti, enim necessitatibus sint veritatis impedit porro provident ad. Alias dicta corrupti, sequi officia nobis laboriosam odio libero sint, sapiente qui saepe quod voluptas nesciunt ducimus quibusdam deleniti, reprehenderit veritatis illum dolore suscipit rem. Quidem fugiat voluptatibus, possimus vel nam odio, suscipit sit similique enim eligendi at? Veniam dolorum consectetur fugiat saepe. Est beatae maxime laborum vel modi?</p>
        <br/><br/>
        <p class="parrafo2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque minus, libero autem eius perferendis suscipit harum voluptatum animi quisquam, quam mollitia, ducimus cum! Ab assumenda itaque facere illum maxime blanditiis laudantium eum voluptatum perspiciatis officiis expedita laboriosam debitis dolores dicta reiciendis, perferendis, dolor quas tenetur! Harum suscipit eum eveniet!</p>
        
    </body>
    </html>
`}</code>
                    <code>{`
.encabezado {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color:'red';
}

.subencabezado {
    text-align: center;
    font-size: 30px;
    color:'orange';
}

.parrafo1 {
    text-align: justify;
    text-indent: 25px;
    text-transform: capitalize;
    color:'green';
    font-size: 20px;
}

.parrafo2 {
    text-align: right;
    text-decoration: underline;
    color:'steelblue';
    font-size: 18px;
    font-style: italic;
}
`}</code>
                </CodeTabs>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <h1 className={sty.encabezado}>Encabezado del documento</h1>
                    <br /><br />
                    <h2 className={sty.subencabezado}>Subencabezado</h2>
                    <hr />
                    <p className={sty.parrafo1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sit ipsum corrupti suscipit sint, iure perspiciatis odio itaque dignissimos porro consectetur quo ratione aliquid, impedit ea non, fugit nihil blanditiis beatae excepturi. Asperiores eius fugiat consequatur similique beatae voluptas at hic aperiam deleniti, enim necessitatibus sint veritatis impedit porro provident ad. Alias dicta corrupti, sequi officia nobis laboriosam odio libero sint, sapiente qui saepe quod voluptas nesciunt ducimus quibusdam deleniti, reprehenderit veritatis illum dolore suscipit rem. Quidem fugiat voluptatibus, possimus vel nam odio, suscipit sit similique enim eligendi at? Veniam dolorum consectetur fugiat saepe. Est beatae maxime laborum vel modi?</p>
                    <br /><br />
                    <p className={sty.parrafo2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque minus, libero autem eius perferendis suscipit harum voluptatum animi quisquam, quam mollitia, ducimus cum! Ab assumenda itaque facere illum maxime blanditiis laudantium eum voluptatum perspiciatis officiis expedita laboriosam debitis dolores dicta reiciendis, perferendis, dolor quas tenetur! Harum suscipit eum eveniet!</p>
                </div>
                <Typography variant="subtitle1" align="justify">
                    Si analizan ese código de ejemplo, podrán observar que solamente utilizamos <b>clases</b>. También utilizamos la mayor parte de las propiedades que aprendimos en la tabla al principio de la lección. Esas propiedades son las más usadas cuando trabajamos con texto en proyectos reales, asi que vale la pena que intenten memorizarlas. Ser un buen desarrollador web no es tarea fácil, se logra escribiendo código y leyendo código(más lo segundo q lo primero), por eso es importante que lean mucho código, investiguen, escriban sus propios proyectos, no es fácil, lo sé, también fui aprendíz alguna vez, pero lo bueno es que puedo ahorrarles muchos tropiezos y confusiones que tuve al aprender y que no repitan mis errores.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Conclusión</Typography>
                <Typography variant="subtitle1" align="justify">
                    Hemos aprendido como estilizar cualquier tipo de texto, cambiando basicamente todas sus propiedades, solo queda que practiquen en sus editores. En la próxima lección veremos algo muy interesante, el famoso modelo de cajas. No se lo pierdan.
                </Typography>
                <Pags prev="/css3/selectores" next="/css3/modelocaja" />
            </Container>
        </>
    )
}

export default Textos;