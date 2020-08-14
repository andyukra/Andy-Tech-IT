import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Nav = () => {

    window.onload = () => {
        const item = document.getElementById('AppBar');
        window.onscroll = () => {
            if (window.scrollY > 500) {
                item.style.background = 'white';
                item.style.color = 'black';
            } else {
                item.style.background = 'rgba(0,0,255,0.3)';
                item.style.color = 'white';
            }
        }
    }

    return (
        <AppBar style={{ background: 'rgba(0,0,255,0.3)', transition: '0.7s ease-out' }} id="AppBar">
            <Toolbar>
                <IconButton color="inherit" style={{ marginRight: '15px' }}>
                    <MenuIcon />
                </IconButton>
                <Typography>
                    AndyTech IT
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;