import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './index.css';

const Headphones = () => {
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

    const products = [
        {
            name: 'Headphones1',
            img: 'https://m.media-amazon.com/images/I/71zfpkr4bYL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Headphones2',
            img: 'https://m.media-amazon.com/images/I/61XuLr92V3L._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Headphones3',
            img: 'https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Headphones4',
            img: 'https://m.media-amazon.com/images/I/513ugd16C6L._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Headphones5',
            img: 'https://m.media-amazon.com/images/I/61qhVikQ-kL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Headphones6',
            img: 'https://m.media-amazon.com/images/I/51Q8DUDT2eL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Headphones7',
            img: 'https://m.media-amazon.com/images/I/61XuLr92V3L._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Headphones8',
            img: 'https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Headphones9',
            img: 'https://m.media-amazon.com/images/I/513ugd16C6L._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Headphones10',
            img: 'https://m.media-amazon.com/images/I/61qhVikQ-kL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
    ]

    return (
        <div className="headphones-prod-container">
            <div className="headphones-results">
                <h4 className="headphones-para-1">Headphones</h4>
                <div className="headphones-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="headphones-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="headphones-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='headphones-prod-para'>{product.name}</p>
                                <p className='headphones-prod-para'>{product.price}</p>
                                <p className='headphones-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Headphones;
