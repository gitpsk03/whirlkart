import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import CartContext from '../../context/CartContext';
import './index.css';

const HomeEssentials = () => {
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
            name: 'HomeEssentials1',
            img: 'https://m.media-amazon.com/images/I/41Ripmjg05L.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'HomeEssentials2',
            img: 'https://m.media-amazon.com/images/I/41bpcbSIXqL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'HomeEssentials3',
            img: 'https://m.media-amazon.com/images/I/217+6Z-yzPL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'HomeEssentials4',
            img: 'https://m.media-amazon.com/images/I/31hTlPxlUkL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'HomeEssentials5',
            img: 'https://m.media-amazon.com/images/I/41G5CjWoKCL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'HomeEssentials6',
            img: 'https://m.media-amazon.com/images/I/315FQYP9IiL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'HomeEssentials7',
            img: 'https://m.media-amazon.com/images/I/61TI-jl3UiL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'HomeEssentials8',
            img: 'https://m.media-amazon.com/images/I/517A8JGGlsL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'HomeEssentials9',
            img: 'https://m.media-amazon.com/images/I/71vJMWTus6L._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'HomeEssentials10',
            img: 'https://m.media-amazon.com/images/I/61ITlnte9uL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
    ]

    return (
        <div className="home-essentials-prod-container">
            <div className="home-essentials-results">
                <h4 className="home-essentials-para-1">Home Essentials</h4>
                <div className="home-essentials-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="home-essentials-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="home-essentials-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='home-essentials-prod-para'>{product.name}</p>
                                <p className='home-essentials-prod-para'><BsCurrencyRupee/>{product.price}</p>
                                <p className='home-essentials-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeEssentials;
