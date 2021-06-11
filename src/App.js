import React from 'react';
import './i18n';
import '../src/assets/styles/main.scss';
import Products from './components/Pages/Products/Products';
import Header from './components/Organisms/header/Header';
import Signin from './components/Pages/Signin/Signin';
import Home from './components/Pages/Home/Home';
import Footer from './components/Organisms/Footer/Footer';
import Register from './components/Pages/Register/Register';
import Scrolltop from '../src/components/molecules/ScrollTop/Scrolltop';
import { Cart } from './components/Pages/Cart/Cart';
import { Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import Success from './components/Pages/Success/Success';

const App =()=>{
    return (
        <Router>
            {/* Header Component */}
            <Header />
            <main className="main-body-layout">
            <Scrolltop showOnHeight={50}/>
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
            </main>
            {/* Footer Component */}
            <Footer />
        </Router>
    )
}
export default App;