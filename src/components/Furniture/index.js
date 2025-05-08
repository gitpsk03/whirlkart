import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './index.css';

const Furniture = () => {
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
            name: 'furniture1',
            img: 'https://c.media-amazon.com/images/I/61f9Ci7U+dL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'furniture2',
            img: 'https://c.media-amazon.com/images/I/71RK5uBpjIL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'furniture3',
            img: 'https://c.media-amazon.com/images/I/71OAdEle7OL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'furniture4',
            img: 'https://c.media-amazon.com/images/I/81lsRA8GRQL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'furniture5',
            img: 'https://c.media-amazon.com/images/I/51eoKWxpEQL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'furniture6',
            img: 'https://c.media-amazon.com/images/I/71VLEWzVrZL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'furniture7',
            img: 'https://c.media-amazon.com/images/I/71-dNLM2PSL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'furniture8',
            img: 'https://c.media-amazon.com/images/I/71QvW5cwO2L._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'furniture9',
            img: 'https://c.media-amazon.com/images/I/91pYfekDR6L._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'furniture10',
            img: 'https://c.media-amazon.com/images/I/818VPBTCxBL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
    ]

    return (
        <div className="furniture-prod-container">
            <div className="furniture-results">
                <h4 className="furniture-para-1">Category: Furniture</h4>
                <div className="furniture-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="furniture-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="furniture-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='furniture-prod-para'>{product.name}</p>
                                <p className='furniture-prod-para'>{product.price}</p>
                                <p className='furniture-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Furniture;
