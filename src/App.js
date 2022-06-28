import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Align from './page/Align';
import Flow from './page/Flow';
import Layer from './page/Layer';
import Line from './page/Line';
import Curve from './page/Curve';
import Space from './page/Space';
import Grid from './page/Grid';
import Point from './page/Point';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path = '/' element = {<Align/>}/>
                    <Route path = '/flow' element = {<Flow/>}/>
                    <Route path = '/layer' element = {<Layer/>}/>
                    <Route path = '/line' element = {<Line/>}/>
                    <Route path = '/curve' element = {<Curve/>}/>
                    <Route path = '/space' element = {<Space/>}/>
                    <Route path = '/grid' element = {<Grid/>}/>
                    <Route path = '/point' element = {<Point/>}/>
                </Routes>
            </Router>
        );
    }
}

export default App;
