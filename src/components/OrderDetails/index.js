import {Link} from 'react-router-dom'
import './index.css'

const OrderDetails = () => (
    <div className='order-details-container'>
        <div className='order-details'>
            <img src='https://img.icons8.com/?size=100&id=114054&format=png&color=000000' alt='tick icon' style={{"marginBottom":"20px"}}/>
            <h1>THANK YOU FOR YOUR PURCHASE</h1>
            <p>Your order number is 000000029.</p>
            <p>We'll email you an order confirmation with details and tracking info.</p>
            <Link to='/'>
                <button className='bg-success text-white' style={{"height":"40px", "width":"200px"}}>Continue Shopping</button>
            </Link>
        </div>
    </div>
)

export default OrderDetails