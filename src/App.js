import React from 'react';
import './i18n';
import '../src/assets/styles/main.scss';
import Products from './components/Pages/Products/Products';
import Header from './components/Organisms/header/Header';
import Signin from './components/Pages/Signin/Signin';
import Home from './components/Pages/Home/Home';
import Footer from './components/Organisms/Footer/Footer';
import Register from './components/Pages/Register/Register';
import {useTranslation} from 'react-i18next';
import { Cart } from './components/Pages/Cart/Cart';
import { GlobalProvider } from './Context/globalContext';
import { Dialog } from './components/Pages/Modal/Dialog';
import {Route, Switch, HashRouter as Router, Redirect} from 'react-router-dom';

const App =()=>{
    // For using locale in the application. t is the core translation function, which through our key value passed
    // as param fetches the related value from our languages objects file. 'i18n' holds many properties used 
    // for getting current state of langugae in the application and updating it.
    const {t} = useTranslation();
    return (
        <GlobalProvider>
            <Router>
                <Header />
                <Switch>
                    {/* All the routes for the application are defined here.*/}
                    <Route path="/products/:id"  render={(props) => <Products {...props}/>}/>
                    <Route path="/login"  render={(props) => <Signin {...props}/>}/>
                    <Route path="/register"  render={(props) => <Register {...props}/>}/>
                    <Route path="/mycart"  render={(props) => <Cart {...props}/>}/>
                    <Route exact path="/"  render={(props) => <Home {...props}/>}/>
                    <Redirect from="/*" to="/"/>
                </Switch>
                <Footer />
                <Dialog/>
            </Router>
            </GlobalProvider>
    )
}
export default App;