import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import CartContext from '../../context/CartContext';
import './index.css';

const WhirlkartBrands = () => {
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
            name: 'WhirlkartProduct1',
            img: 'https://m.media-amazon.com/images/I/31yD9PAFF9L.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'WhirlkartProduct2',
            img: 'https://m.media-amazon.com/images/I/51FDPfVq4bL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'WhirlkartProduct3',
            img: 'https://m.media-amazon.com/images/I/51dSVcIuHhL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'WhirlkartProduct4',
            img: 'https://m.media-amazon.com/images/I/419miNQ3ZGL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'WhirlkartProduct5',
            img: 'https://m.media-amazon.com/images/I/71+JGmRqomL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'WhirlkartProduct6',
            img: 'https://m.media-amazon.com/images/I/61BRl8TzRGL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'WhirlkartProduct7',
            img: 'https://m.media-amazon.com/images/I/71cU2hdk-aL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'WhirlkartProduct8',
            img: 'https://m.media-amazon.com/images/I/61XCqK+a6LL._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'WhirlkartProduct9',
            img: 'https://m.media-amazon.com/images/I/71vwotXH76L._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'WhirlkartProduct10',
            img: 'https://m.media-amazon.com/images/I/41GoNoO4b9L.AC_SX250.jpg',
            price: '1000'
        },
    ]
    
    return (
        <div className="whirlkart-prod-container">
            <div className="whirlkart-results">
                <h4 className="whirlkart-para-1">Whirlkart Products</h4>
                <div className="whirlkart-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="whirlkart-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="whirlkart-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='whirlkart-prod-para'>{product.name}</p>
                                <p className='whirlkart-prod-para'><BsCurrencyRupee/>{product.price}</p>
                                <p className='whirlkart-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhirlkartBrands;
