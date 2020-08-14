import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import MemoryIcon from '@material-ui/icons/Memory';
import styles from './helpers/styles';

const useStyles = makeStyles(theme => (styles));

const Banner = () => {

    const sty = useStyles();

    return (
        <section className={sty.root}>
            <video autoPlay muted loop id="myVideo">
                <source src="https://cdn.clickworker.com/wp-content/uploads/2020/06/aiStartpageHeading.mp4" type="video/mp4" />
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
                        <Button style={{ marginRight: '20px' }} variant="contained" color="secondary">Acerca de</Button>
                        <Button variant="outlined" color="secondary">Contacto</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;