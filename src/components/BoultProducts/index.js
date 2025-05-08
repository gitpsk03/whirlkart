import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './index.css';

const BoultProducts = () => {
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
                    name: 'boult1',
                    img: 'https://m.media-amazon.com/images/I/71zfpkr4bYL._AC_UL480_QL65_.jpg',
                    price: '1000'
                },
                {
                    name: 'boult2',
                    img: 'https://c.media-amazon.com/images/I/71ITkeoYiTL._AC_UY327_FMwebp_QL65_.jpg',
                    price: '1000'
                },
                {
                    name: 'boult3',
                    img: 'https://c.media-amazon.com/images/I/41lhbUic+vL._AC_UY327_FMwebp_QL65_.jpg',
                    price: '1000'
                },
                {
                    name: 'boult4',
                    img: 'https://c.media-amazon.com/images/I/8103-t6n8nL._AC_UY327_FMwebp_QL65_.jpg',
                    price: '1000'
                },
                {
                    name: 'boult5',
                    img: 'https://c.media-amazon.com/images/I/71hMZ91Q3KL._AC_UL480_FMwebp_QL65_.jpg',
                    price: '1000'
                },
                {
                    name: 'boult6',
                    img: 'https://m.media-amazon.com/images/I/71zfpkr4bYL._AC_UL480_QL65_.jpg',
                    price: '1000'
                },
                {
                    name: 'boult7',
                    img: 'https://c.media-amazon.com/images/I/71ITkeoYiTL._AC_UY327_FMwebp_QL65_.jpg',
                    price: '1000'
                },
                {
                    name: 'boult8',
                    img: 'https://c.media-amazon.com/images/I/41lhbUic+vL._AC_UY327_FMwebp_QL65_.jpg',
                    price: '1000'
                },
                {
                    name: 'boult9',
                    img: 'https://c.media-amazon.com/images/I/8103-t6n8nL._AC_UY327_FMwebp_QL65_.jpg',
                    price: '1000'
                },
                {
                    name: 'boult10',
                    img: 'https://c.media-amazon.com/images/I/71hMZ91Q3KL._AC_UL480_FMwebp_QL65_.jpg',
                    price: '1000'
                },
            ]

    return (
        <div className="noise-prod-container">
            <div className="noise-results">
                <h4 className="noise-para-1">Boult Products</h4>
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

export default BoultProducts;











// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import CartContext from '../../context/CartContext';
// import './index.css';

// const BoultProducts = () => {
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
//             name: 'boult1',
//             img: 'https://m.media-amazon.com/images/I/71zfpkr4bYL._AC_UL480_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'boult2',
//             img: 'https://c.media-amazon.com/images/I/71ITkeoYiTL._AC_UY327_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'boult3',
//             img: 'https://c.media-amazon.com/images/I/41lhbUic+vL._AC_UY327_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'boult4',
//             img: 'https://c.media-amazon.com/images/I/8103-t6n8nL._AC_UY327_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'boult5',
//             img: 'https://c.media-amazon.com/images/I/71hMZ91Q3KL._AC_UL480_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'boult6',
//             img: 'https://m.media-amazon.com/images/I/71zfpkr4bYL._AC_UL480_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'boult7',
//             img: 'https://c.media-amazon.com/images/I/71ITkeoYiTL._AC_UY327_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'boult8',
//             img: 'https://c.media-amazon.com/images/I/41lhbUic+vL._AC_UY327_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'boult9',
//             img: 'https://c.media-amazon.com/images/I/8103-t6n8nL._AC_UY327_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//         {
//             name: 'boult10',
//             img: 'https://c.media-amazon.com/images/I/71hMZ91Q3KL._AC_UL480_FMwebp_QL65_.jpg',
//             price: '1000'
//         },
//     ]

//     return (
//         <div className="boult-prod-container">
//             <div className="boult-results">
//                 <h4 className="boult-para-1">Boult Products</h4>
//                 <div className="boult-headphones-2">
//                     {products.map((product, index) => (
//                         <div key={index} className="boult-headphone-box-3">
//                         <Link to='/product-page' state={{product}}>
//                             <div className='boult-sub-prod-1'>
//                                 <img className="boult-headphone-img-2" src={product.img} alt={product.name} />
//                             </div>
//                         </Link>
//                         <Link to='/product-page'>
//                         <div className='boult-sub-prod-2'>
//                            <p className='boult-prod-para'>{product.name}</p>
//                         </div>
//                         </Link>
//                         <Link to='/product-page'>
//                         <div className='boult-sub-prod-3'>
//                             <p className='boult-prod-para'>{product.price}</p>
//                             <p className='boult-prod-para-sm'>Free delivery by 9th Apr</p>
//                         </div>
//                         </Link>
//                     </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BoultProducts;
