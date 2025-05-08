import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './index.css';

const Footwear = () => {
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
            name: 'Footwear1',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/n/7/10-5g-845-10-campus-mod-blu-wht-original-imah9bgw6y4v9hva.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Footwear2',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/p/v/e/-original-imah5xteggzhsg3d.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Footwear3',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/8/j/h/-original-imah25hqujuqvhwy.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Footwear4',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/w/e/q/9-2fd-zane-5-0-u-s-polo-assn-navy-original-imah4ehfztwfmqbk.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Footwear5',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/z/k/q/6-kedona-in001-6-aldo-black-original-imahby9mzxy8gjfj.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Footwear6',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/x/7/h/-original-imah6gzf7nnuxzqg.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Footwear7',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/e/a/7-1011b867-asics-carbon-taupe-grey-original-imahanu6jcyvrq4p.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Footwear8',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/f/q/r/-original-imagr6whgh2dvwhg.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Footwear9',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/0/g/n/-original-imah6gzdyndhkgdx.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Footwear10',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/0/q/-original-imah9mgf5zf98qxz.jpeg?q=70',
            price: '1000'
        },
    ]

    return (
        <div className="footwear-prod-container">
            <div className="footwear-results">
                <h4 className="footwear-para-1">Footwear</h4>
                <div className="footwear-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="footwear-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="footwear-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='footwear-prod-para'>{product.name}</p>
                                <p className='footwear-prod-para'>{product.price}</p>
                                <p className='footwear-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footwear;
