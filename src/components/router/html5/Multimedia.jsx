import React, { useEffect } from 'react';
import Nav from '../../header/Nav.jsx';
import Banner from '../components/Banner.jsx';
import Imgs from '../components/Imgs.jsx';
import Pags from '../components/Pags.jsx';
import { Container, Typography, List, ListItem, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Multimedia = () => {

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, []);

    return (
        <>
            <Nav color="tomato" />
            <Banner label="Multimedia" />
            <Container maxWidth="sm">
                <Typography
                    variant="h4"
                    align="center"
                    style={{ margin: '20px 0' }}
                >Introducción a los elementos Multimedia</Typography>
                <Typography variant="subtitle1" align="justify">
                    Si llegaron hasta aqui y pasaron por las lecciones anteriores, estoy muy orgulloso de ustedes, eso quiere decir que ya estan capacitados de crear sus propios documentos HTML. Con esta lección estaremos terminando el curso introductorio de HTML5, obviamente HTML5 tiene más cosas, como formularios, botones y otros elementos que solo tienen sentido si conocemos "Javascript", ya que estos se controlan con lógica, pero bueno, eso aparte. Los elementos multimedia tienen un atributo básico que es el "src", el cual recibe como valor la "url" o "dirección" desde donde tomar el archivo, sea video, audio o imágen.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Etiqueta Audio</Typography>
                <Imgs url="https://www.computerhope.com/jargon/h/audio.gif" desc="Etiqueta Audio" />
                <Typography variant="subtitle1" align="justify">
                    La etiqueta <b>{`<audio src="" controls>`}</b> como podrán observar posee el atributo <b>"src"</b> y el atributo <b>"controls"</b>. Este último crea un "reproductor" con los botónes "Play", "Stop", el slider de volúmen y la línea de tiempo. En otras palabras, el atributo <b>"controls"</b> genera un reproductor por defecto(varian según el navegador), que te permite reproducir tu audio. Se puede crear un reproductor personalizado con javascript y css, pero eso lo veremos en otros cursos. Veamos un ejemplo.
                </Typography>
                <pre>
                    {`
                    <audio src="https://html.com/wp-content/uploads/flamingos.mp3" controls></audio>
                    `}
                </pre>
                <Typography>Resultado : </Typography>
                <div style={{ widht: '100%', borderRadius: '5px', boxShadow: '1px 2px 3px dimgray', padding: '10px', margin: '15px 0' }}>
                    <audio src="https://html.com/wp-content/uploads/flamingos.mp3" controls></audio>
                </div>
                <Typography variant="subtitle1" align="justify">
                    Si no se le pasa el atributo <b>"controls"</b> no aparecerá nada en el documento. Existen distintos tipos de navegadores(google chrome, firefox, safari, opera...etc), no todos pueden soportar y reproducir los mismos formatos de audio. Aqui una lista de los navegadores más conocidos y los formatos de audio que soportan.
                </Typography>
                <List style={{ padding: '10px', background: 'tomato', color: 'white', borderRadius: '5px' }}>
                    <ListItem button>
                        <Typography><i>Internet Explorer</i> : soporta audios en formato "Mp3", "WebM", "M4A" y "AAC"</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography><i>Google Chrome</i> : soporta audios en formato "Ogg", "Vorbis", "Mp3" y "WAV"</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography><i>Firefox</i> : soporta audios en formato "Ogg", "Vorbis", "WebM" y "WAV"</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography><i>Safari</i> : soporta audios en formato "Mp3", "AAC" y "WAV"</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography><i>Opera</i> : soporta audios en formato "Ogg", "Vorbis" y "WAV"</Typography>
                    </ListItem>
                </List>
                <Typography variant="subtitle1" align="justify">
                    Entonces surge la pregunta, ¿Cómo hacer que mi audio funcione en todos los navegadores? ¡Fácil!, simplemente implementa la etiqueta <b>Audio</b> de ésta manera.
                </Typography>
                <pre>
                    {`
    <audio controls>
        <source src="https://html.com/wp-content/uploads/flamingos.mp3"" type=" audio/mp3">
        <source src="https://html.com/wp-content/uploads/flamingos.ogg"" type=" audio/ogg">
        <source src="https://html.com/wp-content/uploads/flamingos.wav"" type=" audio/wav">
        <p>Tu navegador no puede reproducir este audio.</p>
    </audio>
                    `}
                </pre>
                <Typography variant="subtitle1" align="justify">
                    Esta manera de usar la etiqueta <b>Audio</b> es mejor, pero nesesitarán varios archivos de audio en distintos formatos. Como pueden observar, dentro de la etiqueta <b>Audio</b> hay 3 etiquetas <b>Source</b> las cuales en sus atributos <b>"src"</b> y <b>"type"</b> poseen distintos tipos de formatos(.mp3, .ogg y .wav). El navegador al llegar a la etiqueta <b>Audio</b> comienza a reproducir su primer <b>Source</b>, si no soporta ese formato, intentará reproducir el siguiente, y así puedes colocar tantos <b>Source</b> como formatos de audios tengas. Si el navegador no puede soportar ningun <b>Source</b> colocará un texto en pantalla, "Tu navegador no puede reproducir este audio", ese texto fue proporcionado mediante la etiqueta <b>P</b>, pero pueden colocar el texto q quieran, hasta si quieren una imágen.
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Etiqueta Video</Typography>
                <Typography variant="subtitle1" align="justify">
                    La etiqueta <b>{`<video src="" controls>`}</b> funciona exactamente de la misma manera que la de <b>Audio</b>, solo que a ésta se le pueden pasar los atributos de "height"(altura del video en píxeles) y "width"(anchura del video en píxeles), aunque éstos atributos no suelen utilizarse con frecuencia ya que con CSS podemos configurar su altura y anchura de una forma más libre. Otros atributos aparte de "controls", que se le pueden pasar a los <b>Audios</b> y <b>Videos</b> son "loop"(cuando termina de reproducirse comienza de vuelta y asi infinitamente), "autoplay"(apenas carga el elemento se reproduce automaticamente sin que el usuario presione el boton "Play"), "muted"(sólo en etiquetas de Video, apaga el sonido) y "poster"(sólo en etiquetas de video, muestra una imágen mientras el video esta cargando, o mientras no se esté reproduciendo).
                </Typography>
                <Typography variant="h6" style={{ margin: '20px 0 10px 0' }} align="center">Conclusión</Typography>
                <Typography variant="subtitle1" align="justify">
                    Aqui damos por terminado este curso introductorio de HTML5, espero que les haya sido útil, me gustaría que practiquen creando sus propias páginas web en el editor de código y guardando el archivo con formato ".html". Este lenguaje HTML es muy nesesario aprenderlo para luego seguir con CSS y Javascript, ya que éstos dos últimos no sirven de nada si no se conoce bien las bases de éste. Lo siguiente que les sugiero que aprendan es un lenguaje maravilloso que le dará color y estilo a sus etiquetas de HTML, hablo del "CSS", y obviamente también hay un curso introductorio de CSS en este sitio, es gratuito y están todos invitados. Me despido de ustedes, si dios quiere nos veremos en el próximo curso "Introducción a CSS", muchas gracias por llegar hasta aqui y hasta pronto amigos.
                </Typography>
                <Link to="/" style={{textDecoration:'none', color:'white'}}>
                    <Button style={{ margin: '20px 0' }} variant="contained" color="secondary" fullWidth={true}>Volver a Home</Button>
                </Link>
            </Container>
        </>
    )
}

export default Multimedia;