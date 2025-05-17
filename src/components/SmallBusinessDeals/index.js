import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import CartContext from '../../context/CartContext';
import './index.css';

const SmallBusinessDeals = () => {
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

    const Product = [
        {
            name: 'Product1',
            img: 'https://m.media-amazon.com/images/I/41BhzFNKggL._SR480,440_.jpg',
            price: '1000'
        },
        {
            name: 'Product2',
            img: 'https://m.media-amazon.com/images/I/4169SkBn22L._SR480,440_.jpg',
            price: '1000'
        },
        {
            name: 'Product3',
            img: 'https://m.media-amazon.com/images/I/3115X9FdnML._SR480,440_.jpg',
            price: '1000'
        },
        {
            name: 'Product4',
            img: 'https://m.media-amazon.com/images/I/51Q2jUO-blL._SR480,440_.jpg',
            price: '1000'
        },
        {
            name: 'Product5',
            img: 'https://m.media-amazon.com/images/I/51NGh61Sc2L._SR480,440_.jpg',
            price: '1000'
        },
        {
            name: 'Product6',
            img: 'https://m.media-amazon.com/images/I/411O1rPsbpL._SR480,440_.jpg',
            price: '1000'
        },
        {
            name: 'Product7',
            img: 'https://m.media-amazon.com/images/I/512rbDBirdL._SR480,440_.jpg',
            price: '1000'
        },
        {
            name: 'Product8',
            img: 'https://m.media-amazon.com/images/I/61ujQO3T6LL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Product9',
            img: 'https://m.media-amazon.com/images/I/612I0tsJwQS._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Product10',
            img: 'https://m.media-amazon.com/images/I/715+pKdOIIL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
    ]

    return (
        <div className="small-business-prod-container">
            <div className="small-business-results">
                <h4 className="small-business-para-1">Products</h4>
                <div className="small-business-headphones-2">
                    {Product.map((product, index) => (
                        <div key={index} className="small-business-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="small-business-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='small-business-prod-para'>{product.name}</p>
                                <p className='small-business-prod-para'><BsCurrencyRupee/>{product.price}</p>
                                <p className='small-business-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmallBusinessDeals;
