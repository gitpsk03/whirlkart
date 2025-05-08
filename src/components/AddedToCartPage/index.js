import {Link, useLocation} from 'react-router-dom'
import './index.css'

const AddedToCartPage = () => {
    const location = useLocation()
    const dataDetails = location.state?.dataDetails
    return(
        <div>
            <div className='added-to-cart-con'>
                <div className='added-item'>
                    <img className='added-to-cart-img' src={dataDetails?.img} alt=''/>
                    <div>
                        <h3>Added to cart</h3>
                        <p>{dataDetails?.name}</p>
                    </div>
                </div>
                <div className='navigating-item'>
                    <Link>
                        <button className='bg-warning added-cart-btn'>Proceed to Buy</button>
                    </Link>
                    <Link to='/cart'>
                        <button className='added-cart-btn'>Go to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddedToCartPage