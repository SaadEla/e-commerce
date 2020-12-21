export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1}
            :
                cartItem
            )
    }else{
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const isRemovable = cartItemToRemove.quantity > 1;
    if(isRemovable){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id ?
                {...cartItem, quantity: cartItem.quantity - 1}
            :
                cartItem
            )
    }else{
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
};
export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const updatedarray = cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
    return updatedarray
}