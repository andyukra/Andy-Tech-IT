import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        clipPath: 'polygon(0 0, 100% 0, 100% 84%, 0% 100%)'
    },
    div: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Banner = ({ label, url }) => {

    const sty = useStyles();

    return (
        <section className={sty.root} style={{ backgroundImage: `url(${url})` }}>
            <div className={sty.div}>
                <Typography
                    style={{ color: 'white', fontWeight: 'bold', fontSize: '50px' }}
                >{label}</Typography>
            </div>
        </section>
    )
}

export default Banner;