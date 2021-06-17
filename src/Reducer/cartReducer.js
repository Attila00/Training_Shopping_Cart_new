export const CartReducer = (state, action) =>{
    let cartAmt = state.totalCartAmount;
    switch(action.type){
        case 'ADD_ITEM':
            return  {...state, selectedProducts:[...state.selectedProducts, action.payload], totalCartAmount:state.totalCartAmount + parseFloat(action.payload.totalPrice)}
        case 'ADD_QUANTITY':
            let addedProductQuanity = [...state.selectedProducts];     
            addedProductQuanity[action.payload.id].quantity += 1;
            addedProductQuanity[action.payload.id].totalPrice += parseFloat(addedProductQuanity[action.payload.id].price);
            cartAmt += addedProductQuanity[action.payload.id].price;
            return {...state, selectedProducts:addedProductQuanity, totalCartAmount:cartAmt };
        case 'REMOVE_ITEM':
            let removedProductQuantity = [...state.selectedProducts];
            cartAmt -= removedProductQuantity[action.payload.id].price;
            removedProductQuantity.splice(action.payload.id,1);
            return {...state, selectedProducts:removedProductQuantity, totalCartAmount:cartAmt};
        case 'REMOVE_QUANTITY':
            let removedProduct = [...state.selectedProducts];
            removedProduct[action.payload.id].quantity -= 1;
            removedProduct[action.payload.id].totalPrice -= parseFloat(removedProduct[action.payload.id].price);
            cartAmt -= removedProduct[action.payload.id].price;
            return {...state, selectedProducts:removedProduct, totalCartAmount:cartAmt};
        case 'HANDLE_MODAL':
            return {...state, isOpen:action.payload.isDialogOpen}
        case 'SIGNED_UP':
            return {...state, isUser:{...action.payload}}
    }
}