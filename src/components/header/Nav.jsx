import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Nav = () => {

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