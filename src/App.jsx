import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Index from './components/index.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
//Import Routes
import Intro from './components/router/html5/Intro.jsx';
import Estructura from './components/router/html5/Estructura.jsx';
import Cuerpo from './components/router/html5/Cuerpo.jsx';

const App = () => {

    return (
        <CssBaseline>
            <BrowserRouter>
                <Route exact path="/" component={Index}/>
                <Route path="/html5/intro" component={Intro}/>
                <Route path="/html5/estructura" component={Estructura}/>
                <Route path="/html5/cuerpo" component={Cuerpo}/>
            </BrowserRouter>
        </CssBaseline>
    )
}

export default App;