import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './index.css';

const AutomotiveEssentials = () => {
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
            name: 'AutoEssentials1',
            img: 'https://m.media-amazon.com/images/I/51fI9HpUL-L._AC._SR240,240.jpg',
            price: '1000'
        },
        {
            name: 'AutoEssentials2',
            img: 'https://m.media-amazon.com/images/I/21i2jAASa5L._AC._SR240,240.jpg',
            price: '1000'
        },
        {
            name: 'AutoEssentials3',
            img: 'https://m.media-amazon.com/images/G/31/2024/Auto/New_Page/tyre._SS300_QL85_.jpg',
            price: '1000'
        },
        {
            name: 'AutoEssentials4',
            img: 'https://m.media-amazon.com/images/G/31/2024/Auto/New_Page/Connecting-mobility._SS300_QL85_.jpg',
            price: '1000'
        },
        {
            name: 'AutoEssentials5',
            img: 'https://m.media-amazon.com/images/G/31/2024/Auto/New_Page/Engine-oil._SS300_QL85_.jpg',
            price: '1000'
        },
        {
            name: 'AutoEssentials6',
            img: 'https://m.media-amazon.com/images/I/314bkRSy3XL._AC._SR240,240.jpg',
            price: '1000'
        },
        {
            name: 'AutoEssentials7',
            img: 'https://m.media-amazon.com/images/G/31/2025/Auto/HARSH/turtle-wax._SS300_QL85_FMpng_.png',
            price: '1000'
        },
        {
            name: 'AutoEssentials8',
            img: 'https://m.media-amazon.com/images/G/31/2024/Auto/New_Page/Engine-oil._SS300_QL85_.jpg',
            price: '1000'
        },
        {
            name: 'AutoEssentials9',
            img: 'https://m.media-amazon.com/images/G/31/2025/Auto/HARSH/Mobile_holders._CB548106197_.jpg',
            price: '1000'
        },
        {
            name: 'AutoEssentials10',
            img: 'https://m.media-amazon.com/images/G/31/2024/Auto/New_Page/Helmets--riding-gears._SS300_QL85_.jpg',
            price: '1000'
        },
    ]

    return (
        <div className="auto-prod-container">
            <div className="auto-results">
                <h4 className="auto-para-1">Automotive Essentials</h4>
                <div className="auto-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="auto-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="auto-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='auto-prod-para'>{product.name}</p>
                                <p className='auto-prod-para'>{product.price}</p>
                                <p className='auto-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutomotiveEssentials;
