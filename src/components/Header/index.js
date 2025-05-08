import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import CartContext from '../../context/CartContext';
import "./index.css";

const Header = () => {
    const [input, setInput] = useState("");
    const [category, setCategory] = useState("All");
    const {isLoginSuccessful, setIsLoginSuccessful} = useContext(CartContext)
    const navigate = useNavigate();
    const onClickLogout = () => {
        localStorage.removeItem('isAuthenticated');
        setIsLoginSuccessful(false);
        navigate('/login')
    };
    const onClickCart = () => {
        navigate('/cart');
    };
    const onClickAccount = () => {
        if(!isLoginSuccessful) {
            navigate('/login');
            return;
        }
        navigate('/account');
    };
    const handleSearch = () => {
        if (input.trim() !== "") {
            navigate(`/search-list-page?query=${encodeURIComponent(input)}&category=${encodeURIComponent(category)}`);
        }
    };

    return (
        <>
        <nav className="head-nav-container">
            <ul className="head-ul">
                <li>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <p className="head-header-name">Whirlkart</p>
                    </Link>
                </li>
                <li>
                    <select className="head-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Fresh">Fresh</option>
                        <option value="Appliances">Appliances</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Computers">Computers</option>
                    </select>
                </li>
                <li>
                    <input
                        type="text"
                        className="head-search-bar"
                        placeholder="Search Whirlkart.in"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </li>
                <li>
                    <button className="head-search-btn" onClick={handleSearch}>
                        <FiSearch className="head-search-icon" />
                    </button>
                </li>
                 <li>
                     {isLoginSuccessful ? (
                            <div className="d-flex flex-row">
                                <div>
                                <Dropdown as={ButtonGroup} className="head-acc-1">
                                    <Button variant="black" className="custom-dropdown-btn" onClick={onClickAccount}>Account</Button>
                                    <Dropdown.Toggle split variant="black" id="dropdown-split-basic" className="custom-dropdown-btn" />
                                    <Dropdown.Menu className="custom-dropdown-menu">
                                        <Dropdown.Item href="/profile" className="custom-dropdown-item">Profile</Dropdown.Item>
                                        <Dropdown.Item href="/" className="custom-dropdown-item" onClick={onClickLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </div>
                                <button className="header-cart" onClick={onClickCart}>Cart</button>
                            </div>
                     ) : (
                        <div className="d-flex flex-row">
                                <div>
                                    <Dropdown as={ButtonGroup} className="head-acc-1">
                                        <Button variant="black" className="custom-dropdown-btn" onClick={onClickAccount}>Account</Button>
                                        <Dropdown.Toggle split variant="black" id="dropdown-split-basic" className="custom-dropdown-btn" />
                                        <Dropdown.Menu className="custom-dropdown-menu">
                                            <Dropdown.Item href="/login" className="custom-dropdown-item">login</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <button className="header-cart" onClick={onClickCart}>Cart</button>
                        </div>
                     )}
                 </li>
            </ul>
        </nav>
        <nav className="head-nav-container-2">
                <ul className="head-ul-2">
                    <li className="li-2">
                        <Link className="link-nav-2" to='/small-businesses'>All</Link>
                    </li>
                    <li className="li-2">
                    <Link className="link-nav-2" to="/categories?category=Fresh" >Fresh</Link>
                    </li>
                    <li className="li-2">
                        <Link className="link-nav-2" to='/appliances'>Appliances</Link>
                    </li>
                    <li className="li-2">
                    <Link className="link-nav-2" to="/categories?category=Mobiles" >Mobiles</Link>
                    </li>
                    <li className="li-2">
                    <Link className="link-nav-2" to="/categories?category=Electronics" >Electronics</Link>
                    </li>
                    <li className="li-2">
                    <Link className="link-nav-2" to="/categories?category=Clothing" >Clothing</Link>
                    </li>
                    <li className="li-2">
                        <Link className="link-nav-2" to='/furniture'>Home & Garden</Link>
                    </li>
                    <Link className="link-nav-2" to="/categories?category=Sports" >Sports & Outdoors</Link>
                    <li className="li-2"></li>
                    <li className="li-2">
                    <Link className="link-nav-2" to="/categories?category=Computers" >Computers</Link>
                    </li>
                    <li className="li-2">
                        <Link className="link-nav-2" to='/furniture'>Furniture</Link>
                    </li>
                    <li className="li-2">
                        <Link className="link-nav-2" to='toys'>Toys & Hobbies</Link>
                    </li>
                    <li className="li-2">
                    <Link className="link-nav-2" to='/small-businesses'>More</Link>
                    </li>
                </ul>
        </nav>
        </>
    );
};

export default Header;

