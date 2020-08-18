import React, { useEffect } from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Imgs from '../components/Imgs.jsx';
import Pags from '../components/Pags.jsx';
import CodeTabs from '../components/CodeTabs.jsx';
import { Container, Typography } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import ArrowIcon from '@material-ui/icons/ExpandLess';


const Selectores = () => {

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
            <Banner label="Selectores" url="https://media.vlpt.us/images/jakeseo_me/post/7492518b-f81c-4ebe-be44-a40f2af5064c/css%20shield.png" />
            <Container maxWidth="sm">
                <Typography
                    variant="h4"
                    align="center"
                    style={{ margin: '20px 0' }}
                >Accediendo a las etiquetas HTML desde CSS</Typography>
                <Typography variant="subtitle1" align="justify">
                    Existen 3 maneras de conectar CSS con HTML, comenzaremos viendo la manera más eficiente, y la que deberían usar preferiblemente siempre. Abran su editor de código, en una carpeta vacía creen un archivo llamado "index.html", y otro archivo llamado "estilos.css"(notese la extensión .css). Ahora escriban o copien estos códigos en cada archivo correspondiente. Luego guardenlos y abran el "index.html" para ver los resultados.
                </Typography>
                <CodeTabs>
                    <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Selectores</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <h1>Selectores</h1>

    <p class="texto">Esto es un texto simple con una clase</p>

    <div id="cajita"></div>
    
</body>
</html>
`}</code>
                    <code>{`
h1 {
    color : 'red';
}

.texto {
    color : 'blue';
}

#cajita {
    width : 200px;
    height : 200px;
    background-color : 'green';
}
`}</code>
                </CodeTabs>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <h1 style={{ color: 'red' }}>Selectores</h1>

                    <p style={{ color: 'blue' }}>Esto es un texto simple con una clase</p>

                    <div style={{ backgroundColor: 'green', width: '200px', height: '200px' }}></div>
                </div>
                <Typography variant="subtitle1" align="justify">
                    Veamos primero el código HTML, es la estructura básica que ya conocemos desde el curso anterior, con algunos ligeros cambios. Agregamos una nueva etiqueta <b>{`<link>`}</b> que es la que se encarga de "Linkear" o "Unir" el archivo "CSS" al documento HTML. Esta etiqueta <b>Link</b> tiene 2 atributos, <b>rel</b> y <b>href</b>. El atributo <b>"href"</b> toma la dirección del archivo a "Linkear", en éste caso el archivo <b>estilos.css</b> se encuentra en la misma carpeta, por eso se escribe tal cual. si tuvieramos otra carpeta dentro de otra carpeta y allí el archivo, por ejemplo, en <b>href</b> pondriamos "/carpeta1/carpeta2/estilos.css", o algo asi. El atributo <b>rel</b> define la relación del archivo que "Linkeara" con el documento HTML, en este caso el valor es "stylesheet"(hoja de estilos en inglés).
                     <br /><br />

                    Ahora observemos las otras etiquetas. <b>{`<h1>`}</b> no tiene nada nuevo. <b>{`<p>`}</b> tiene un nuevo atributo <b>"class"</b> y la etiqueta <b>{`<div>`}</b> tiene un atributo <b>"id"</b>. Estos nuevos atributos se utilizan para identificar las etiquetas HTML, y asi, poder ser modificadas por un archivo CSS(en este caso desde "estilos.css"), es decir, es la forma que tiene <b>CSS</b> de acceder y modificar cierta etiqueta en particular. Si observamos ahora el archivo "estilos.css", veremos que primero accedemos a todas las etiquetas <b>h1</b> del documento HTML y cambiamos el color de su texto a rojo. Al no especificar ninguna <b>clase</b> ni <b>id</b> a nuestra etiqueta <b>h1</b>, el archivo CSS cambiara a color rojo <b>TODAS</b> las etiquetas <b>h1</b> que encuentre en la página.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Tipos de selectores</Typography>
                <Imgs url="https://1.bp.blogspot.com/-LnkTfONBcDs/WgiZdZtvNbI/AAAAAAAAAQU/vqfo5kKEjvsRE9vjZV6BrryhJLyPpi79wCLcBGAs/s1600/regla_css.png" desc="Estructura de una regla CSS" />
                <Typography variant="subtitle1" align="jusfify">
                    Entonces un selector es un "identificador" mediante el cual, el CSS sabe exactamente <b>"a quién estilizar"</b>. Sabiendo esto veremos 3 tipos de selectores básicos. <b>Selectores de tipo</b>, <b>Selectores de clase</b> y <b>Selectores de id</b>.
                </Typography>
                <Typography variant="h6" align="center">Selectores de tipo</Typography>
                <CodeTabs>
                    <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Selectores</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <p>Este es un párrafo sin identificadores</p>

    <p>Este es otro párrafo del documento</p>

    <p>Y Este también </p>
    
</body>
</html>
`}</code>
                    <code>{`
p {
    color : 'green';
    font-size: 35px;
    text-align: center;
}
`}</code>
                </CodeTabs>
                <Typography variant="subtitle1" align="justify">
                    Como pueden ver, en el archivo <b>CSS</b> Utilizo un <b>Selector de tipo o de etiqueta</b>, y luego le aplico los estilos. Traduciendo el código <b>CSS</b> a lenguaje humano, le estoy diciendo, "Oye CSS, seleccióna todas las etiquetas <b>{`<p>`}</b> y aplicale los siguientes estilos". Luego del selector se abre  y se cierra una llave, dentro van las propiedades y sus valores. CSS significa (Cascading Style Sheets). Cascading es porque las propiedades van en "cascada", una debajo de otra y se separan entre ellas con un <b>Punto y Coma</b> ";".
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Selector de clase e id</Typography>
                <Typography variant="subtitle1" align="justify">
                    Como habíamos dicho anteriormente, una etiqueta puede tener 2 tipos de <b>identificadores</b>, <b>class</b> e <b>id</b>. Lo que las diferencia una de la otra, es que una etiqueta puede tener más de una <b>clase</b>, pero sólo un <b>id</b>.
                </Typography>
                <CodeTabs>
                    <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Selectores</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <div class="rojo redondo chico"></div>

    <div class="verde cuadrado mediano"></div>

    <div class="azul redondo grande"></div>
    
</body>
</html>
`}</code>
                    <code>{`
.rojo {
    background-color : red;
}

.verde {
    background-color : green;
}

.azul {
    background-color : blue;
}

.chico {
    width : 50px;
    height: 50px;
}

.mediano {
    width: 100px;
    height: 100px;
}

.grande {
    width: 150px;
    height: 150px;
}

.redondo {
    border-radius: 100%;
}

.cuadrado {
    border-radius: 0;
}
`}</code>
                </CodeTabs>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <div style={{ background: 'red', width: '50px', height: '50px', borderRadius: '100%' }}></div>

                    <div style={{ background: 'green', width: '100px', height: '100px' }}></div>

                    <div style={{ background: 'blue', width: '150px', height: '150px', borderRadius: '100%' }}></div>
                </div>
                <Typography variant="subtitle1" align="justify">
                    Analizemos los códigos. En el documento HTML, tenemos una estructura básica con 3 <b>Div</b>(cajas). Cada <b>Div</b> posee 3 clases(separadas con espacios) definidas en el atributo <b>class</b>. Ahora por ejemplo, si yo quisiera estilizar todas las etiquetas con la clase "redondo"(q en este caso son 2), en el archivo CSS, crearía una "regla css" en dónde utilizaría como <b>selector</b> el nombre de la clase precedida por un <b>punto</b>. y solamente nesesitaré crear una regla, ya que las clases son <b>reutilizables</b>, es decir que ahora si creo 4, o 5 o 20 <b>div</b> y les agrego la clase "redondo", todos esos <b>divs</b> se volverán redondos(obviamente nesesitarían tener un alto y un ancho definido, porque por defecto un DIV no tiene dimensiones ni un fondo de color para q lo podamos ver, pero se entiende la idea).
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Veamos los ID</Typography>
                <CodeTabs>
                    <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Selectores</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <h1 id="titulo">Estudiando CSS</h1>

    <h2 id="subtitulo">Estudiar estilización es muy divertido</h2>

    <p id="descripcion">Ahora estamos conociendo los identificadores <b>ID</b> y <b>Class</b> y son muy fáciles.</p>
    
</body>
</html>
`}</code>
                    <code>{`
#titulo {
    color : red;
    font-weight: bold;
    text-align: center;
}

#subtitulo {
    color : green;
    text-align: center;
    font-style: italic;
}

#descripcion {
    color : blue;
    text-align: justify;
}
`}</code>
                </CodeTabs>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <h1 style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Estudiando CSS</h1>

                    <h2 style={{ color: 'green', textAlign: 'center', fontStyle: 'italic' }}>Estudiar estilización es muy divertido</h2>

                    <p style={{ color: 'blue', textAlign: 'justify' }}>Ahora estamos conociendo los identificadores <b>ID</b> ,<b>Class</b> y son muy fáciles.</p>
                </div>
                <Typography variant="subtitle1" align="justify">
                    A diferencia de las clases, una etiqueta HTML solo puede tener un identificador <b>id</b>, y esto es muy útil para cuando el código HTML se vuelva muy grande, podremos estar seguros que sólo existe un elemento con un <b>id</b> específico y no no exista otro con el mismo ID, de esta forma tendremos más control del código. Desde <b>CSS</b> podemos acceder a los <b>id</b> utilizando como selector el nombre del ID precedido por una almhoadilla <b>#</b>.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Conclusión</Typography>
                <Typography variant="subtitle1" align="justify">
                    Conociendo los selectores más básicos, y cómo utilizarlos para seleccionar una o varias etiquetas HTML, en la siguiente lección ya podremos comenzar a ver las distintas propiedades que existen en este maravilloso lenguaje <b>CSS</b>.
                </Typography>
                <Pags prev="/css3/intro" next="/css3/textos" />
            </Container>
        </>
    )
}

export default Selectores;
