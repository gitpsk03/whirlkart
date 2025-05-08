import { Link, useLocation  } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import CartContext from '../../context/CartContext';
import './index.css';

const Categories = () => {
    const location = useLocation()
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
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
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get("category");
    
        setSelectedCategory(category);
    
        fetchCategoryProducts(category);
      }, [location.search]);

      const fetchCategoryProducts = (category) => {
        const allProducts = [
            {
                name: 'Fresh1',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/81FbVYZJYyL.AC_SL240_.jpg',
                price: '100',
                category: 'Fresh',
            },
            {
                name: 'Fresh2',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/81pku5wrK9L.AC_SL240_.jpg',
                price: '100',
                category: 'Fresh',
            },
            {
                name: 'Fresh3',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/81-J0Qwn50L.AC_SL240_.jpg',
                price: '100',
                category: 'Fresh',
            },
            {
                name: 'Fresh4',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/71Iu8ORdJPL.AC_SL240_.jpg',
                price: '100',
                category: 'Fresh',
            },
            {
                name: 'Fresh5',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/81FbVYZJYyL.AC_SL240_.jpg',
                price: '100',
                category: 'Fresh',
            },
            {
                name: 'Fresh6',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/51R11KxAfIL.AC_SL240_.jpg',
                price: '100',
                category: 'Fresh',
            },
            {
                name: 'Fresh7',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/61xrIAiNe9L.AC_SL240_.jpg',
                price: '100',
                category: 'Fresh',
            },
            {
                name: 'Fresh8',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/91sjEAy2I4L.AC_SL240_.jpg',
                price: '100',
                category: 'Fresh',
            },
            {
                name: 'Fresh9',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/51LCAzhnmyL.AC_SL240_.jpg',
                price: '100',
                category: 'Fresh',
            },
            {
                name: 'Fresh10',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/81VEKeJzb0L.AC_SL240_.jpg',
                price: '100',
                category: 'Fresh',
            },
            {
                name: 'Mobile1',
                img: 'https://m.media-amazon.com/images/I/41gPGB5fW3L._SR480,440_.jpg',
                price: '10000',
                category: 'Mobiles',
            },
            {
                name: 'Mobile2',
                img: 'https://c.media-amazon.com/images/I/41OJfxIUcjL._SR480,440_.jpg',
                price: '10000',
                category: 'Mobiles',
            },
            {
                name: 'Mobile3',
                img: 'https://c.media-amazon.com/images/I/31ppZt0uIML._SR480,440_.jpg',
                price: '10000',
                category: 'Mobiles',
            },
            {
                name: 'Mobile4',
                img: 'https://c.media-amazon.com/images/I/41oU8ZXR0fL._SR480,440_.jpg',
                price: '10000',
                category: 'Mobiles',
            },
            {
                name: 'Mobile5',
                img: 'https://c.media-amazon.com/images/I/41zYuwNgi2L._SR480,440_.jpg',
                price: '10000',
                category: 'Mobiles',
            },
            {
                name: 'Mobile6',
                img: 'https://c.media-amazon.com/images/I/41OJfxIUcjL._SR480,440_.jpg',
                price: '10000',
                category: 'Mobiles',
            },
            {
                name: 'Mobile7',
                img: 'https://c.media-amazon.com/images/I/31ppZt0uIML._SR480,440_.jpg',
                price: '10000',
                category: 'Mobiles',
            },
            {
                name: 'Mobile8',
                img: 'https://c.media-amazon.com/images/I/41oU8ZXR0fL._SR480,440_.jpg',
                price: '10000',
                category: 'Mobiles',
            },
            {
                name: 'Mobile9',
                img: 'https://c.media-amazon.com/images/I/41zYuwNgi2L._SR480,440_.jpg',
                price: '10000',
                category: 'Mobiles',
            },
            {
                name: 'Mobile10',
                img: 'https://m.media-amazon.com/images/I/41gPGB5fW3L._SR480,440_.jpg',
                price: '10000',
                category: 'Mobiles',
            },
            {
                name: 'Electronic1',
                img: 'https://m.media-amazon.com/images/I/21r9AFAD6cL._AC._SR360,460.jpg',
                price: '1000',
                category: 'Electronics',
            },
            {
                name: 'Electronic2',
                img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Monitors._SS400_QL85_.jpg',
                price: '1000',
                category: 'Electronics',
            },
            {
                name: 'Electronic3',
                img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Camera__Accessories._SS400_QL85_.jpg',
                price: '1000',
                category: 'Electronics',
            },
            {
                name: 'Electronic4',
                img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Smartwatches._SS400_QL85_.jpg',
                price: '1000',
                category: 'Electronics',
            },
            {
                name: 'Electronic5',
                img: 'https://m.media-amazon.com/images/I/21r9AFAD6cL._AC._SR360,460.jpg',
                price: '1000',
                category: 'Electronics',
            },
            {
                name: 'Electronic6',
                img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Monitors._SS400_QL85_.jpg',
                price: '1000',
                category: 'Electronics',
            },
            {
                name: 'Electronic7',
                img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Camera__Accessories._SS400_QL85_.jpg',
                price: '1000',
                category: 'Electronics',
            },
            {
                name: 'Electronic8',
                img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Smartwatches._SS400_QL85_.jpg',
                price: '1000',
                category: 'Electronics',
            },
            {
                name: 'Electronic9',
                img: 'https://c.media-amazon.com/images/I/61H1dMNTSnL._AC._SR360,460.jpg',
                price: '1000',
                category: 'Electronics',
            },
            {
                name: 'Electronic10',
                img: 'https://m.media-amazon.com/images/I/21r9AFAD6cL._AC._SR360,460.jpg',
                price: '1000',
                category: 'Electronics',
            },
            {
                name: 'Clothing1',
                img: 'https://m.media-amazon.com/images/I/81eVonPUBgL._SY879_.jpg',
                price: '1000',
                category: 'Clothing',
            },
            {
                name: 'Clothing2',
                img: 'https://c.media-amazon.com/images/I/71eUwDk8z+L._SX569_.jpg',
                price: '1000',
                category: 'Clothing',
            },
            {
                name: 'Clothing3',
                img: 'https://c.media-amazon.com/images/I/51xOEh5DKYL._SY741_.jpg',
                price: '1000',
                category: 'Clothing',
            },
            {
                name: 'Clothing4',
                img: 'https://c.media-amazon.com/images/I/61idJrfaIRL._SX569_.jpg',
                price: '1000',
                category: 'Clothing',
            },
            {
                name: 'Clothing5',
                img: 'https://c.media-amazon.com/images/I/61nrBPX2ATL._SY741_.jpg',
                price: '1000',
                category: 'Clothing',
            },
            {
                name: 'Clothing6',
                img: 'https://m.media-amazon.com/images/I/81eVonPUBgL._SY879_.jpg',
                price: '1000',
                category: 'Clothing',
            },
            {
                name: 'Clothing7',
                img: 'https://c.media-amazon.com/images/I/71eUwDk8z+L._SX569_.jpg',
                price: '1000',
                category: 'Clothing',
            },
            {
                name: 'Clothing8',
                img: 'https://c.media-amazon.com/images/I/51xOEh5DKYL._SY741_.jpg',
                price: '1000',
                category: 'Clothing',
            },
            {
                name: 'Clothing9',
                img: 'https://c.media-amazon.com/images/I/61idJrfaIRL._SX569_.jpg',
                price: '1000',
                category: 'Clothing',
            },
            {
                name: 'Clothing10',
                img: 'https://c.media-amazon.com/images/I/61nrBPX2ATL._SY741_.jpg',
                price: '1000',
                category: 'Clothing',
            },
            {
                name: 'SportAccessories1',
                img: 'https://m.media-amazon.com/images/I/51NKPZx0a6L._AC_UL480_FMwebp_QL65_.jpg',
                price: '1000',
                category: 'Sports',
            },
            {
                name: 'SportAccessories2',
                img: 'https://c.media-amazon.com/images/I/51df0s6DzmL._AC_UL480_FMwebp_QL65_.jpg',
                price: '1000',
                category: 'Sports',
            },
            {
                name: 'SportAccessories3',
                img: 'https://c.media-amazon.com/images/I/71l2-gWOnpL._AC_UL480_FMwebp_QL65_.jpg',
                price: '1000',
                category: 'Sports',
            },
            {
                name: 'SportAccessories4',
                img: 'https://c.media-amazon.com/images/I/71LFB0J7Z4L._AC_UL480_FMwebp_QL65_.jpg',
                price: '1000',
                category: 'Sports',
            },
            {
                name: 'SportAccessories5',
                img: 'https://c.media-amazon.com/images/I/61-n+ddVIHL._AC_UL480_FMwebp_QL65_.jpg',
                price: '1000',
                category: 'Sports',
            },
            {
                name: 'SportAccessories6',
                img: 'https://m.media-amazon.com/images/I/51NKPZx0a6L._AC_UL480_FMwebp_QL65_.jpg',
                price: '1000',
                category: 'Sports',
            },
            {
                name: 'SportAccessories7',
                img: 'https://c.media-amazon.com/images/I/51df0s6DzmL._AC_UL480_FMwebp_QL65_.jpg',
                price: '1000',
                category: 'Sports',
            },
            {
                name: 'SportAccessories8',
                img: 'https://c.media-amazon.com/images/I/71l2-gWOnpL._AC_UL480_FMwebp_QL65_.jpg',
                price: '1000',
                category: 'Sports',
            },
            {
                name: 'SportAccessories9',
                img: 'https://c.media-amazon.com/images/I/71LFB0J7Z4L._AC_UL480_FMwebp_QL65_.jpg',
                price: '1000',
                category: 'Sports',
            },
            {
                name: 'SportAccessories10',
                img: 'https://c.media-amazon.com/images/I/61-n+ddVIHL._AC_UL480_FMwebp_QL65_.jpg',
                price: '1000',
                category: 'Sports',
            },
            {
                name: 'Computer1',
                img: 'https://m.media-amazon.com/images/I/61IcdoVmZuL._AC_UL480_QL65_.jpg',
                price: '50000',
                category: 'Computers',
            },
            {
                name: 'Computer2',
                img: 'https://c.media-amazon.com/images/I/71jG+e7roXL._AC_UL600_SR600,400_.jpg',
                price: '50000',
                category: 'Computers',
            },
            {
                name: 'Computer3',
                img: 'https://c.media-amazon.com/images/I/71n4BPDmUNL._AC_UL600_SR600,400_.jpg',
                price: '50000',
                category: 'Computers',
            },
            {
                name: 'Computer4',
                img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
                price: '50000',
                category: 'Computers',
            },
            {
                name: 'Computer5',
                img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
                price: '50000',
                category: 'Computers',
            },
            {
                name: 'Computer6',
                img: 'https://m.media-amazon.com/images/I/61IcdoVmZuL._AC_UL480_QL65_.jpg',
                price: '50000',
                category: 'Computers',
            },
            {
                name: 'Computer7',
                img: 'https://c.media-amazon.com/images/I/71jG+e7roXL._AC_UL600_SR600,400_.jpg',
                price: '50000',
                category: 'Computers',
            },
            {
                name: 'Computer8',
                img: 'https://c.media-amazon.com/images/I/71n4BPDmUNL._AC_UL600_SR600,400_.jpg',
                price: '50000',
                category: 'Computers',
            },
            {
                name: 'Computer9',
                img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
                price: '50000',
                category: 'Computers',
            },
            {
                name: 'Computer10',
                img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
                price: '50000',
                category: 'Computers',
            },
        ];
        const filtered = allProducts.filter(p => p.category === category);
    setProducts(filtered);
    };

    return (
        <div className="footwear-prod-container">
            <div className="footwear-results">
                <h2 className="footwear-para-1">Category: {selectedCategory}</h2>
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

export default Categories;
