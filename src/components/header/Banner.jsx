import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import MemoryIcon from '@material-ui/icons/Memory';
import MailIcon from '@material-ui/icons/EmailRounded'
import FaceIcon from '@material-ui/icons/Facebook';
import styles from './helpers/styles';

const useStyles = makeStyles(theme => (styles));

const Banner = () => {

    const sty = useStyles();
    const [dialogState1, setDialogState1] = useState(false);
    const [dialogState2, setDialogState2] = useState(false);

    return (
        <section className={sty.root}>
            <Dialog open={dialogState1} onClose={() => setDialogState1(false)}>
                <DialogTitle style={{ textAlign: 'center' }}>Contacto</DialogTitle>
                <List>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: red[300] }}>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="andyguachin87@gmail.com" />
                    </ListItem>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: blue[700] }}>
                                <FaceIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="andy apertura" />
                    </ListItem>
                    <Box style={{display:'flex', justifyContent:'center'}}>
                        <Button size="small" onClick={() => setDialogState1(false)} style={{ margin: '10px 0' }} variant="contained" color="secondary">Entendido</Button>
                    </Box>
                </List>
            </Dialog>
            <Dialog open={dialogState2} onClose={() => setDialogState2(false)}>
                <DialogTitle style={{ textAlign: 'center' }}>Acerca de</DialogTitle>
                <Box p={5} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography align="justify">
                        Andy Tech IT&copy; es un sitio de aprendizaje e introducción al desarrollo web, dirigido principalmente a personas que nunca han tenido contacto con la programación. Contamos con la preparación acadèmica suficiente como para que un estudiante ingrese sin ningún tipo de conocimiento, y salga de aquí con la capacidad de desarrollar sus propios proyectos y páginas web de manera completamente profesional. Este sitio es totalmente libre y gratuito. Si alguna entidad desea cobrarles dinero por acceder a nuestros cursos, estará cometiendo una grave infracción, que podría ser penada por la ley de derechos de autor. Muchas gracias por visitarnos, esperamos que este sitio sea de su agrado.
                    </Typography>
                    <Button onClick={() => setDialogState2(false)} style={{ margin: '10px 0' }} variant="contained" color="secondary">Entendido</Button>
                </Box>
            </Dialog>
            <video autoPlay muted loop id="myVideo" poster="https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg">
                <source src="https://cdn.clickworker.com/wp-content/uploads/2020/06/aiStartpageHeading.mp4" type="video/mp4" />
                <img src="https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg" alt="alt img"/>
            </video>
            <svg className={sty.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fafafa" fillOpacity="1" d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,112C672,128,768,224,864,250.7C960,277,1056,235,1152,186.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className={sty.innerBanner}>
                <div className={sty.contentBanner}>
                    <Typography variant="h5" style={{ color: 'cyan', width: '400px' }}>
                        Bienvenidos al sitio web de cursos y gadgets de programación mas importante en la red.
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '15px 0' }}>
                        <MemoryIcon style={{ color: 'white', fontSize: '45px', marginRight: '10px' }} />
                        <Typography variant="h4" style={{ color: 'white', fontWeight: 'bold' }}>
                            AndyTech IT
                        </Typography>
                    </div>
                    <div className={sty.buttonsBanner}>
                        <Button onClick={() => setDialogState2(true)} style={{ marginRight: '20px' }} variant="contained" color="secondary">Acerca de</Button>
                        <Button onClick={() => setDialogState1(true)} variant="outlined" color="secondary">Contacto</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;