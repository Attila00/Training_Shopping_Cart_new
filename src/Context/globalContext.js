import React from 'react';
import { CartReducer } from '../Reducer/cartReducer';
import categories from '../../server/categories/index.get.json';
import totalProductsList from '../../server/products/index.get.json';
import { sortByCategory } from '../../src/utils/utils';
export const GlobalContext = React.createContext();
export const GlobalProvider = ({children}) =>{
    const initialState = {
        isUser:{
            loggedIn:false,
            username:"",
            name:""
        },
        isOpen: false,
        selectedProducts :[],
        totalCartAmount:0,
        categories: sortByCategory(categories, 'order'),
        totalProductsList 
    }
    const [globalState, dispatch] = React.useReducer(CartReducer, initialState);
    return <GlobalContext.Provider value={{globalState, dispatch}}>{children}</GlobalContext.Provider>
}
