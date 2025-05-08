import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './index.css';

const BoatProducts = () => {
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
            name: 'BoAt1',
            img: 'https://c.media-amazon.com/images/I/614gbl-O98L._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'BoAt2',
            img: 'https://c.media-amazon.com/images/I/71Ca60LwwdL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'BoAt3',
            img: 'https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'BoAt4',
            img: 'https://m.media-amazon.com/images/I/513ugd16C6L._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'BoAt5',
            img: 'https://c.media-amazon.com/images/I/719kWV8ElbL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'BoAt6',
            img: 'https://c.media-amazon.com/images/I/614gbl-O98L._AC_UY327_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'BoAt7',
            img: 'https://c.media-amazon.com/images/I/71Ca60LwwdL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'BoAt8',
            img: 'https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'BoAt9',
            img: 'https://m.media-amazon.com/images/I/513ugd16C6L._AC_UL480_QL65_.jpg',
            price: '1000'
        },
        {
            name: 'BoAt10',
            img: 'https://c.media-amazon.com/images/I/719kWV8ElbL._AC_UL480_FMwebp_QL65_.jpg',
            price: '1000'
        },
    ]

    return (
        <div className="noise-prod-container">
            <div className="noise-results">
                <h4 className="noise-para-1">BoAt Products</h4>
                <div className="noise-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="noise-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="noise-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='noise-prod-para'>{product.name}</p>
                                <p className='noise-prod-para'>{product.price}</p>
                                <p className='noise-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BoatProducts;






// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import CartContext from '../../context/CartContext';
// import './index.css';

// const BoatProducts = () => {
//     const { addCartBtnClicked } = useContext(CartContext);
//     const {isLoginSuccessful} = useContext(CartContext)

//     const onAddToCart = (product) => {
//         if(!isLoginSuccessful) {
//             alert('Please login to add items to cart');
//             return;
//         }
//         const uniqueId = `${product.id}-${Date.now()}`
//         const productWithUniqueId = {...product, id: uniqueId}
//         addCartBtnClicked(productWithUniqueId);
//         alert('Item added to the cart')
//     };

//     const products = [
//         {
//             name: 'BoAt1',
//             img: 'https://c.media-amazon.com/images/I/614gbl-O98L._AC_UY327_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'BoAt2',
//             img: 'https://c.media-amazon.com/images/I/71Ca60LwwdL._AC_UL480_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'BoAt3',
//             img: 'https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL480_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'BoAt4',
//             img: 'https://m.media-amazon.com/images/I/513ugd16C6L._AC_UL480_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'BoAt5',
//             img: 'https://c.media-amazon.com/images/I/719kWV8ElbL._AC_UL480_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'BoAt6',
//             img: 'https://c.media-amazon.com/images/I/614gbl-O98L._AC_UY327_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'BoAt7',
//             img: 'https://c.media-amazon.com/images/I/71Ca60LwwdL._AC_UL480_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'BoAt8',
//             img: 'https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL480_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'BoAt9',
//             img: 'https://m.media-amazon.com/images/I/513ugd16C6L._AC_UL480_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'BoAt10',
//             img: 'https://c.media-amazon.com/images/I/719kWV8ElbL._AC_UL480_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//     ]

//     return (
//         <div className="boat-prod-container">
//             <div className="boat-results">
//                 <h4 className="boat-para-1">Boat Products</h4>
//                 <div className="boat-headphones-2">
//                     {products.map((product, index) => (
//                         <div key={index} className="boat-headphone-box-3">
//                             <Link to='/product-page' state={{product}}>
//                                 <div className='boat-sub-prod-1'>
//                                     <img className="boat-headphone-img-2" src={product.img} alt={product.name} />
//                                 </div>
//                             </Link>
//                             <Link to='/product-page'>
//                             <div className='boat-sub-prod-2'>
//                                <p className='boat-prod-para'>{product.name}</p>
//                             </div>
//                             </Link>
//                             <Link to='/product-page'>
//                             <div className='boat-sub-prod-3'>
//                                 <p className='boat-prod-para'>{product.price}</p>
//                                 <p className='boat-prod-para-sm'>Free delivery by 9th Apr</p>
//                             </div>
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BoatProducts;
