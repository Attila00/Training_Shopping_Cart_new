export const CartReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_ITEM':
            return  {...state, selectedProducts:[...state.selectedProducts, action.payload]}
        case 'ADD_QUANTITY':
            let addedProductQuanity = [...state.selectedProducts];            
            addedProductQuanity[action.payload.id].quantity += 1;
            addedProductQuanity[action.payload.id].totalPrice += parseFloat(addedProductQuanity[action.payload.id].price);
            return {...state, selectedProducts:addedProductQuanity};
        case 'REMOVE_ITEM':
            let removedProductQuantity = [...state.selectedProducts];
            removedProductQuantity.splice(action.payload.id,1);
            return {...state, selectedProducts:removedProductQuantity};
        case 'REMOVE_QUANTITY':
            let removedProduct = [...state.selectedProducts];
            removedProduct[action.payload.id].quantity -= 1;
            removedProduct[action.payload.id].totalPrice -= parseFloat(removedProduct[action.payload.id].price);
            return {...state, selectedProducts:removedProduct};
        case 'HANDLE_MODAL':
            return {...state, isOpen:action.payload.isDialogOpen}
        case 'SIGNED_UP':
            alert("signed red"+ action.payload.loggedIn)
            return {...state, isUser:{...action.payload}}
    }
}