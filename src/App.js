import React from 'react';
import '../src/assets/styles/main.scss';
import Header from './components/Organisms/header/Header';
import Home from './components/Pages/Home/Home';
import Products from './components/Pages/Products/Products';
import Signin from './components/Pages/Signin/Signin';
import Register from './components/Pages/Register/Register';
import {Route, Switch, HashRouter as Router, Redirect} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import './i18n';

const App =()=>{
    // For using locale in the application
    const {t, i18n} = useTranslation();
    return (
            <Router>
                <Header />
                <Switch>
                    {/* All the routes for the application are defined here.*/}
                    <Route path="/products/:id"  render={(props) => <Products {...props}/>}/>
                    <Route path="/login"  render={(props) => <Signin {...props}/>}/>
                    <Route path="/register"  render={(props) => <Register {...props}/>}/>
                    <Route exact path="/"  render={(props) => <Home {...props}/>}/>
                    <Redirect from="/*" to="/"/>
                </Switch>
            </Router>
    )
}
export default App;