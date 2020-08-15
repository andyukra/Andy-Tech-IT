import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Pags = ({ prev, next }) => (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '15px 0' }}>
        <Link to={prev} style={{textDecoration:'none'}}>
            <Button variant="outlined" color="inherit" size="large">Volver atras</Button>
        </Link>
        <Link to={next} style={{textDecoration:'none'}}>
            <Button variant="outlined" color="secondary" size="large">Siguiente lección</Button>
        </Link>
    </div>
)

export default Pags;