import React from 'react';
import './i18n';
import '../src/assets/styles/main.scss';
import Products from './components/Pages/Products/Products';
import Header from './components/Organisms/header/Header';
import Signin from './components/Pages/Signin/Signin';
import Home from './components/Pages/Home/Home';
import Footer from './components/Organisms/Footer/Footer';
import Register from './components/Pages/Register/Register';
import { Cart } from './components/Pages/Cart/Cart';
import { Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import Success from './components/Pages/Success/Success';

const App =()=>{
    // For using locale in the application. t is the core translation function, which through our key value passed
    // as param fetches the related value from our languages objects file. 'i18n' holds many properties used 
    // for getting current state of langugae in the application and updating it.
    // const {t} = useTranslation();
    return (
        <Router>
            {/* Header Component */}
            <Header />
            <Switch>
                {/* All the routes for the application are defined here.*/}
                <Route path="/products/:id"  render={(props) => <Products {...props}/>}/>
                <Route path="/login"  render={(props) => <Signin {...props}/>}/>
                <Route path="/register"  render={(props) => <Register {...props}/>}/>
                <Route path="/mycart"  render={(props) => <Cart {...props}/>}/>
                <Route path="/success"  render={(props) => <Success {...props}/>}/>
                <Route exact path="/"  render={(props) => <Home {...props}/>}/>
                <Redirect from="/*" to="/"/>
            </Switch>
            {/* Footer Component */}
            <Footer />
        </Router>
    )
}
export default App;