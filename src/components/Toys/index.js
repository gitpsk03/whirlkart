import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './index.css';

const Toys = () => {
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
            name: 'Toy1',
            img: 'https://m.media-amazon.com/images/I/41CNYCZRB0L.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'Toy2',
            img: 'https://m.media-amazon.com/images/I/31UeFUz676L.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'Toy3',
            img: 'https://m.media-amazon.com/images/I/41h8cVssweL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'Toy4',
            img: 'https://m.media-amazon.com/images/I/41Qr5SG3kJL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'Toy5',
            img: 'https://m.media-amazon.com/images/I/51GvkgZx5-L.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'Toy6',
            img: 'https://m.media-amazon.com/images/I/41FMLCtBTLL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'Toy7',
            img: 'https://m.media-amazon.com/images/I/31-uLhBuLfL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'Toy8',
            img: 'https://m.media-amazon.com/images/I/418Mmh-UrTL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'Toy9',
            img: 'https://m.media-amazon.com/images/I/41gdYV629eL.AC_SX250.jpg',
            price: '1000'
        },
        {
            name: 'Toy10',
            img: 'https://m.media-amazon.com/images/I/41YO7qByt9L.AC_SX250.jpg',
            price: '1000'
        },
    ]

    return (
        <div className="toys-prod-container">
            <div className="toys-results">
                <h4 className="toys-para-1">Category: Toys</h4>
                <div className="toys-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="toys-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="toys-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='toys-prod-para'>{product.name}</p>
                                <p className='toys-prod-para'>{product.price}</p>
                                <p className='toys-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Toys;
