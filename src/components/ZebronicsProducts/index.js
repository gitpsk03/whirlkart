import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import CartContext from '../../context/CartContext';
import './index.css';

const ZebronicsProducts = () => {
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
            name: 'Zebronics1',
            img: 'https://c.media-amazon.com/images/I/51D37uhFFBL._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Zebronics2',
            img: 'https://c.media-amazon.com/images/I/61NwRhuMJnL._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Zebronics3',
            img: 'https://c.media-amazon.com/images/I/51AlEWmNCrL._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Zebronics4',
            img: 'https://c.media-amazon.com/images/I/618-45t0P5L._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Zebronics5',
            img: 'https://m.media-amazon.com/images/I/61qhVikQ-kL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Zebronics6',
            img: 'https://c.media-amazon.com/images/I/51D37uhFFBL._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Zebronics7',
            img: 'https://c.media-amazon.com/images/I/61NwRhuMJnL._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Zebronics8',
            img: 'https://c.media-amazon.com/images/I/51AlEWmNCrL._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Zebronics9',
            img: 'https://c.media-amazon.com/images/I/618-45t0P5L._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'Zebronics10',
            img: 'https://m.media-amazon.com/images/I/61qhVikQ-kL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
    ]

    return (
        <div className="zebronics-prod-container">
            <div className="zebronics-results">
                <h4 className="zebronics-para-1">Zebronics Products</h4>
                <div className="zebronics-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="zebronics-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="zebronics-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='zebronics-prod-para'>{product.name}</p>
                                <p className='zebronics-prod-para'><BsCurrencyRupee/>{product.price}</p>
                                <p className='zebronics-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ZebronicsProducts;
