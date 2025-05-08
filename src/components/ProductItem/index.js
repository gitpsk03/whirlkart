import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import { BsCurrencyRupee } from "react-icons/bs";
import CartContext from '../../context/CartContext';
import './index.css'
import { Link } from 'react-router-dom';

const ProductItem = () => {
    const [count, setCount] = useState(1);
    const [currentPrice] = useState(350);
    const onClickPlus = (e) => {
        console.log('Plus button clicked', e);
        setCount(prevCount => prevCount + 1);
    };  
    const onClickMinus = (e) => {
        console.log('Minus button clicked', e);
        if(count !== 1){
            setCount(prevCount => prevCount - 1);
        }
    };
    return (
        <CartContext.Consumer>
            {value => {
                const {addCartBtnClicked} = value;

                const onAddCartBtnClicked = () => {
                    const data = {
                        id: uuidv4(),
                        name: 'boAt Rockerz 255 Pro+',
                        price: count*currentPrice,
                        count: count,
                        img: 'https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_UL480_QL65_.jpg',
                    }
                    addCartBtnClicked(data)
                }
                return(
                <div className='prod-item-container'>
                    <div className='item-main'>
                        <div>
                            <img className='prod-img' src='https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_UL480_QL65_.jpg' alt=''/>
                        </div>
                        <div className='item-data'>
                            <p className='para-highlight'>BoAt Rockerz 255 Pro+</p>
                            <p>Vist the BoAt Store</p>
                            <p className='money'>999</p>
                            <div className='para'>
                                <p className='para-space-1'>Brand</p>
                                <p>BoAt</p>
                            </div>
                            <div className='para'>
                                <p className='para-space-2'>Colour</p>
                                <p>Active Black</p>
                            </div>
                            <div className='para'>
                                <p className='para-space-3'>Ear</p>
                                <p>Placement In Ear</p>
                            </div>
                            <div className='para'>
                                <p className='para-space-4'>Form Factor</p>
                                <p>In Ear</p>
                            </div>
                            <div className='para'>
                                <p className='para-space-5'>Impedance</p>
                                <p>16 Ohm</p>
                            </div>
                            <br/>
                            <p>About this item</p>
                            <ul>
                                <li>Playback- Leave all charging worries at bay as the Rockerz 255 Pro+ comes with a humongous battery back up of 60 Hours</li>
                                <li>ASAP Charge- With a few minutes of ASAP Charge you can get upto 10 hours of audio time by charging them for only 10 mins</li>
                                <li>Drivers- The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers</li>
                                <li>Controls- Its multi-function Integrated controls lends an intuitive listening experience with volume increase and Decrease and Stop and Play buttons</li>
                            </ul>
                            <p>See more product details</p>
                        </div>
                        <div className='prod-side-box'>
                            <p><BsCurrencyRupee />{currentPrice}.00</p>
                            <p>In Stock</p>
                            <div className='count mb-2'>
                                <button className='mt-4 prod-btn' type='button' onClick={onClickMinus}>-</button>
                                <p className='pt-4'>{count}</p>
                                <button className='mt-4 prod-btn'type='button' onClick={onClickPlus}>+</button>
                            </div>
                            <div className='d-flex'>
                                <button className='prod-pay-btn bg-warning' onClick={onAddCartBtnClicked}>Add Cart</button>
                                <Link to='/payment'>
                                    <button className='prod-pay-btn bg-warning'>Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
        </CartContext.Consumer>
    )
}

export default ProductItem