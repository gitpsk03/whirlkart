import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import CartContext from '../../context/CartContext';
import './index.css';

const Appliances = () => {
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
            name: 'Appliances1',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/j/e/v/-original-imagz6qsdxsgzqfh.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Appliances2',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/iron/j/r/k/vesta-lightweight-automatic-quick-heat-up-stylish-sleek-2-years-original-imaghj3zgssjhmg7.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Appliances3',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/vacuum-cleaner/l/e/t/-original-imahy8dcqjzah4ae.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Appliances4',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fan/n/t/t/centaur-55-1-table-fan-400-luminous-original-imah939yeepcvbyy.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Appliances5',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/8/g/6/stainless-steel-water-filter-non-electric-long-ceramic-candle-1-original-imagpb69m5x9jbyr.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Appliances6',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/washing-machine-new/m/7/c/-original-imahf5wfbdc7kzh7.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Appliances7',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/vacuum-cleaner/8/k/o/regal-agaro-original-imah6ayhtf5a6ajm.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Appliances8',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fan/f/t/h/ambrose-es-52-1-ceiling-fan-1200-havells-original-imagpfm5gyycdsph.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Appliances9',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/room-heater/w/y/5/qh-4302-usha-820-original-imah8teapec3y32k.jpeg?q=70',
            price: '1000'
        },
        {
            name: 'Appliances10',
            img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fan/j/3/2/stand-82-58-1-pedestal-fan-400-orient-electric-original-imah2twdvyjzfg6s.jpeg?q=70',
            price: '1000'
        },
    ]

    return (
        <div className="appliances-prod-container">
            <div className="appliances-results">
                <h4 className="appliances-para-1">Category: Appliances</h4>
                <div className="appliances-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="appliances-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="appliances-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='appliances-prod-para'>{product.name}</p>
                                <p className='appliances-prod-para'><BsCurrencyRupee/>{product.price}</p>
                                <p className='appliances-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Appliances;
