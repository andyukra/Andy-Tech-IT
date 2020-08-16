import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Drawer, List, ListItem, ListSubheader, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Nav = ({ color }) => {

    const [drawerState, setDrawerState] = useState(false);

    return (
        <>
            <Drawer open={drawerState} onClose={() => setDrawerState(false)} anchor="left">
                <div style={{ widht: '100%', height: '150px', background: 'rgba(0,0,0,0.7)' }}></div>
                <List>
                    <ListSubheader>
                        <Typography variant="h6">Cursos de AndyTech IT</Typography>
                    </ListSubheader>
                    <Divider />
                    <ListSubheader>
                        <Typography>HTML5</Typography>
                    </ListSubheader>
                    <Link to="/html5/intro" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button>
                            <Typography>01. Introducción</Typography>
                        </ListItem>
                    </Link>
                    <Link to="/html5/estructura" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button>
                            <Typography>02. Estructura</Typography>
                        </ListItem>
                    </Link>
                    <Link to="/html5/cuerpo" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button>
                            <Typography>03. Cuerpo</Typography>
                        </ListItem>
                    </Link>
                    <Link to="/html5/estructura2" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button>
                            <Typography>04. Estructura 2</Typography>
                        </ListItem>
                    </Link>
                    <Link to="/html5/reforzando" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button>
                            <Typography>05. Reforzando</Typography>
                        </ListItem>
                    </Link>
                    <Link to="/html5/multimedia" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button>
                            <Typography>06. Multimedia</Typography>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <AppBar style={{ background: `${color}`, transition: '0.7s ease-out' }} id="AppBar">
                <Toolbar>
                    <IconButton onClick={() => setDrawerState(true)} color="inherit" style={{ marginRight: '15px' }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                        AndyTech IT
                </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Nav;