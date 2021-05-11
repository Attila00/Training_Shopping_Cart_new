import React from 'react';
// import '../css/main.scss';
import Header from './components/Organisms/header/Header';
import Section from './components/Organisms/Section';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
const App =()=>{
    return (
            <Router>
                <Header />
                <Section/>
            </Router>
    )
}
export default App;