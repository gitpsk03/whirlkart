import { useContext } from 'react';
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { BsCurrencyRupee } from "react-icons/bs";
import './index.css'

const PaymentPage = () => {
    const {total} = useContext(CartContext)
    return (
    <div>
        <div>
            <h3 className='pay-heading'>Checkout</h3>
            <div className='pay-container'>
                <div className='payment-main-con'>
                    <div className='pay-add'>
                        <p className='pay-para' style={{'fontWeight': 'bold'}}>Shipping Address</p>
                        <p className='change-para' style={{'fontWeight': 'bold', 'fontSize': '12px'}}>Change</p>
                    </div>
                    <p className='pay-para-add'>11-5/2,<br/>Srinagar colony, <br/>Hyderabad</p>
                    <hr/>
                    <div className='pay-add'>
                        <p className='pay-para text-danger' style={{'fontWeight': 'bold', "marginTop":'-10px'}}>Payment method</p>
                        <p className='change-para-2' style={{'fontWeight': 'bold', 'fontSize': '12px', "marginTop":'-10px'}}>Change</p>
                    </div>
                    <div className='select-option'>
                            <input className='circle' name='paymentMethod' type='radio'/>
                            <p className='pay-para-add-2' style={{'fontWeight': 'bold', 'fontSize': '14px'}}>Visa ***1111 (Whirlkart Pay)</p>
                        </div>
                    <hr/>
                    <div className='pay-sub'style={{"marginTop":'-25px'}}>
                        <p className='pay-sub-para' style={{'fontWeight': 'bold'}}>Other Payment Methods</p>
                        <div className='select-option'>
                            <input className='circle' name='paymentMethod' type='radio'/>
                            <p className='pay-para-box'>UPI</p>
                        </div>
                        <div className='select-option'>
                            <input className='circle' name='paymentMethod' type='radio'/>
                            <p className='pay-para-box'>Net-Banking</p>
                        </div>
                        <div className='select-option'>
                            <input className='circle' name='paymentMethod' type='radio'/>
                            <p className='pay-para-box'>Cash on Delivery</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex flex-row">
                        <div>
                            <p style={{'fontWeight': 'bold'}}>Order Summary</p>
                            <p style={{'fontSize': '15px'}}>Items:</p>
                            <p>Delivery:</p>
                            <p>Total: </p>
                            <p>Promotion Applied: </p>
                            <p className='text-danger' style={{'fontWeight': 'bold', 'fontSize': '15px'}}>Order Total: </p>
                        </div>
                        <div style={{'marginTop':'38px', "marginLeft":'50px'}}>
                            <p><BsCurrencyRupee/>{total}.00</p>
                            <p><BsCurrencyRupee/>0.00</p>
                            <p><BsCurrencyRupee/>{total}.00</p>
                            <p><BsCurrencyRupee/>0.00</p>
                            <p className='text-danger' style={{'fontWeight': 'bold', 'fontSize': '15px'}}><BsCurrencyRupee/>{total}.00</p>
                        </div>
                    </div>
                    <Link to='/order-details'>
                        <button className='bg-warning place-order-btn'>Place Order</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default PaymentPage