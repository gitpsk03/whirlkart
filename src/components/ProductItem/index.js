import React from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { useLocation } from 'react-router-dom';
import './index.css'

const ProductItem = () => {
    const location = useLocation()
    const product = location.state?.product
    const navigate = useNavigate();
    const { addCartBtnClicked } = useContext(CartContext);
    const {isLoginSuccessful} = useContext(CartContext)
    const onAddToCart = (product) => {
        if(!isLoginSuccessful) {
            alert('Please login to add items to cart');
            return;
        }
        const uniqueId = `${product.id}-${Date.now()}`
        const productWithUniqueId = {...product, id: uniqueId}
        addCartBtnClicked(productWithUniqueId);
        alert('Item added to the cart')
    };
    const onClickBuy = () => {
        if(!isLoginSuccessful) {
            alert('Please login to Buy');
            return;
        }
        navigate('/payment-page')
    };
    if(!product){
        return <p>No Product found</p>
    }
    return(
            <div className='prod-item-container'>
            <div className='item-main'>
                <div>
                    <img className='prod-img' src={product.img} alt={product.name}/>
                </div>
                <div className='item-data'>
                    <h1 className='para-highlight'>Product</h1>
                    <p><BsCurrencyRupee />{product.price}</p>
                    <p>Shipped In: It will take 14 to 21 days to dispatch this product.</p>
                    <div className='d-flex flex-column'>
                        <h6 style={{'fontSize':'13px'}}>Things you might want to know:</h6>
                        <h6 style={{'fontSize':'13px'}}>Order value based discounts applicable - 5% above Rs. 5000;</h6>
                        <p style={{'fontSize':'13px'}}>We ship worldwide</p>
                        <p style={{'fontSize':'13px'}}>Free shipping within India on orders over ₹3000</p>
                        <p style={{'fontSize':'13px'}}>All products are quality checked prior to dispatch</p>
                        <p style={{'fontSize':'13px'}}>In the rare case of damage, we exchange or refund for the damaged piece if notified within 4 days</p>
                        <p style={{'fontSize':'13px'}}>Transit time additional as per destination</p>
                        <p style={{'fontSize':'13px'}}>We usually dispatch within 24 working hours subject to stock availability</p>
                    </div>
                </div>
                <div className='prod-side-box'>
                    <p><BsCurrencyRupee />{product.price}</p>
                    <p style={{'fontSize':'10px'}}>FREE delivery Thursday, 10 April on your first order</p>
                    <p style={{'fontSize':'10px'}}>In Stock</p>
                    <p style={{'fontSize':'10px'}}>Payment: Secure transaction</p>
                    <p style={{'fontSize':'10px'}}>Ships from: Source</p>
                    <p style={{'fontSize':'10px'}}>Sold by Retail Private Ltd</p>
                    <p style={{'fontSize':'10px'}}>Packaging Ships in product packaging Include</p>
                    <div className='d-flex flex-column'>
                        <button className='prod-pay-btn bg-warning' onClick={() => onAddToCart(product)}>Add Cart</button>
                        <button className='prod-pay-btn bg-warning' onClick={() => onClickBuy(product)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default ProductItem