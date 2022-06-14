////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Require your dependencies here
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Load here your components
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Home from './page/Home';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Class definition
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Make this class visible to other modules when is loaded as a component.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default App;
