import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Index from './components/index.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
//Import Routes HTML5
import Intro from './components/router/html5/Intro.jsx';
import Estructura from './components/router/html5/Estructura.jsx';
import Cuerpo from './components/router/html5/Cuerpo.jsx';
import Estructura2 from './components/router/html5/Estructura2.jsx';
import Reforzando from './components/router/html5/Reforzando.jsx';
import Multimedia from './components/router/html5/Multimedia.jsx';
//import routes CSS3
import IntroCSS from './components/router/css3/IntroCSS.jsx';
import Selectores from './components/router/css3/Selectores.jsx';
import Textos from './components/router/css3/Textos.jsx';
import ModeloCaja from './components/router/css3/ModeloCaja.jsx';

const App = () => {

    return (
        <CssBaseline>
            <BrowserRouter>
                <Route exact path="/" component={Index}/>
                <Route path="/html5/intro" component={Intro}/>
                <Route path="/html5/estructura" component={Estructura}/>
                <Route path="/html5/cuerpo" component={Cuerpo}/>
                <Route path="/html5/estructura2" component={Estructura2}/>
                <Route path="/html5/reforzando" component={Reforzando}/>
                <Route path="/html5/multimedia" component={Multimedia}/>

                <Route path="/css3/intro" component={IntroCSS}/>
                <Route path="/css3/selectores" component={Selectores}/>
                <Route path="/css3/textos" component={Textos}/>
                <Route path="/css3/modelocaja" component={ModeloCaja}/>
            </BrowserRouter>
        </CssBaseline>
    )
}

export default App;