import React, { useContext} from 'react'
import {Link} from 'react-router-dom'
import { BsCurrencyRupee } from "react-icons/bs";
import CartContext from '../../context/CartContext'
import Footer from '../Footer'
import './index.css'


const Cart = () => {
    const {cartList, setCartList, total, isLoginSuccessful} = useContext(CartContext);
    const onClickRemove = (id) => {
        const updatedCart = cartList.filter((each) => each.id !== id);
        setCartList(updatedCart);
    };
    
    
    const isCartEmpty = cartList.length === 0;

    return (
        <>
        {isLoginSuccessful ? (
            <div className='page-wrapper'>
            <div className='prof-con'>
                <div className='cart-container' style={{'marginLeft':'-200px'}}>
                    <div className='cart-items-list'>
                        {isCartEmpty ? (
                            <div className='cart-details'>
                                <img className='cart-img-1' src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='cart images'/>
                                <p style={{'fontSize': '20px', 'marginLeft': '20px'}}>Your cart is empty!</p>
                                <p style={{'fontSize': '13px', 'marginLeft': '40px'}}>Add items to it now.</p>
                                <Link to='/'>
                                    <button className='shopping-btn'>Shop now</button>
                                </Link>
                            </div>  
                        ) : (
                            <div>
                                <div className='cart-items-con'>
                                    <div>
                                    <div>
                                        <h1 className='cart-heading'>Shopping Cart</h1>
                                    </div>
                                    {cartList.map(each => {
                                        return(
                                            <div className='main-con'>
                                                <div className='cart-main-container'>
                                                    <div className='cart-item-container'>
                                                        <Link to='/product-page' state={{product: each}}>
                                                        <img src={each.img} alt='cart-item-img' className='cart-item-img'/>
                                                        </Link>
                                                        <div className='cart-sub-item'>
                                                            <div className='cart-item-name'>
                                                                <Link to='/product-page' state={{product: each}}>
                                                                <p className='cart-item-name-para'>{each.name}</p>
                                                                </Link>
                                                                <p style={{'fontSize': '15px'}}>Price</p>
                                                            </div>
                                                            <div className='d-flex'>
                                                                <p className='text-success text-sm'>In stock</p>
                                                                <p className='total-bot'><BsCurrencyRupee />{each.price}.00</p>
                                                            </div>
                                                            <p className='text-sm'>Eligible for FREE Shipping</p>
                                                            <div className='checkbox-container'>
                                                                <input className='check-box' type='checkbox'/>
                                                                <p className='checkbox-text'>This will be a gift</p>
                                                            </div>
                                                            <div className='cart-item-bot'>
                                                                <select className='sel'>
                                                                    <option value='1'>Qty: 1</option>
                                                                    <option value='2'>Qty: 2</option>
                                                                    <option value='3'>Qty: 3</option>
                                                                    <option value='4'>Qty: 4</option>
                                                                    <option value='5'>Qty: 5</option>
                                                                    <option value='6'>Qty: 6</option>
                                                                    <option value='7'>Qty: 7</option>
                                                                    <option value='8'>Qty: 8</option>
                                                                    <option value='9'>Qty: 9</option>
                                                                    <option value='10'>Qty: 10</option>
                                                                </select>
                                                                <button className='cart-item-button' type="button" onClick={() => onClickRemove(each.id)}>Delete</button>
                                                            </div>                        
                                                        </div>                                       
                                                    </div>
                                                </div>
                                            </div>
                                        )})
                                    }
                                    </div>
                                    <div className='side-con'>
                                        <div style={{'marginLeft':'30px', 'marginTop': '20px'}}>
                                            <p style={{'fontSize': '13px'}} className='text-success'>Your order is eligible for FREE Delivery.</p>
                                            <p style={{'fontSize': '11px'}}>Choose FREE Delivery option at checkout.</p>
                                            <div className='d-flex flex-row'>
                                                <p style={{'fontSize': '20px'}}>Subtotal: <BsCurrencyRupee />{total}.00</p>                                    </div>
                                            <div className='checkbox-container'>
                                                <input type='checkbox'/>
                                                <p className='checkbox-text'>This order contains a gift</p>
                                            </div>
                                            <Link to='/payment-page'>
                                                <button className='buy-btn'>Proceed to Buy</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>) : (
            <div className='page-wrapper'>
            <div className='prof-con'>
                <div className='cart-container-2' style={{'marginLeft':'-200px'}}>
                    <div className='cart-items-list-2'>
                        <h2>Your Whirlkart Cart is empty</h2>
                        <Link to='/'>
                            <button className='cart-signin-btn'>Sign in to your account</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        )}
    </>
    )
        
}

export default Cart







