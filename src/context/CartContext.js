import React from "react";


const CartContext = React.createContext({
    isLoginSuccessful: () => {},
    cartList: [],
    addCartBtnClicked: () => {},
    setCartList: () => {},
    total: 0,
})


export default CartContext