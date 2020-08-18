import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Drawer, List, ListItem, ListSubheader, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

const Nav = ({ color }) => {

    const [drawerState, setDrawerState] = useState(false);

    return (
        <>
            <Drawer open={drawerState} onClose={() => setDrawerState(false)} anchor="left">
                <div style={{ widht: '100%', height: '150px', background: 'url("https://news.sap.com/africa/files/2017/12/in-memory-computing.jpg")', backgroundSize:'cover' }}></div>
                <List style={{width:'250px'}}>
                    <ListSubheader>
                        <Typography style={{ margin: '5px 0' }}>HTML5</Typography>
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
                    <Divider />
                    <ListSubheader>
                        <Typography style={{ margin: '5px 0' }}>CSS3</Typography>
                    </ListSubheader>
                    <Link to="/css3/intro" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button>
                            <Typography>01. Introducción</Typography>
                        </ListItem>
                    </Link>
                    <Link to="/css3/selectores" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button>
                            <Typography>02. Selectores</Typography>
                        </ListItem>
                    </Link>
                    <Link to="/css3/textos" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button>
                            <Typography>03. Textos</Typography>
                        </ListItem>
                    </Link>
                    <Link to="/css3/modelocaja" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button>
                            <Typography>04. Modelo de caja</Typography>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <AppBar style={{ background: `${color}`, transition: '0.7s ease-out' }} id="AppBar">
                <Toolbar>
                    <IconButton onClick={() => setDrawerState(true)} color="inherit" style={{ marginRight: '15px' }}>
                        <MenuIcon />
                    </IconButton>
                    <Link to="/" style={{ textDecoration: 'none', color:'white' }} id="linkNav">
                        <Typography variant="h5" style={{fontWeight:'bold'}}>
                            AndyTech IT
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Nav;