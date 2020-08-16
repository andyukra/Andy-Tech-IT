import React from 'react';
import { Typography } from '@material-ui/core';

const Imgs = ({url, desc}) => (
    <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <img style={{ boxShadow: '1px 1px 10px rgba(0,0,0,0.4)', width:'100%' }} src={url} alt="imagen descriptiva" />
        <Typography style={{ marginTop: '10px' }} variant="caption" align="center">{desc}</Typography>
    </div>
)

export default Imgs;