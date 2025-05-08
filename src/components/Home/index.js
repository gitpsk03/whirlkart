import { Link } from 'react-router-dom';
import { BsCurrencyRupee } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer'
import './index.css'

const Home = () => (
    <div className='home-container'>
        <div className='home-carousel-card'>
            <Carousel className='home-carousel-container'>
                <Carousel.Item>
                    <Link to='/'>
                        <img className='home-carousel-img' src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/dbd07c8f0d822f95.jpg?q=20' alt='Deals'/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/'>
                    <img className='home-carousel-img' src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/97765e8487823791.jpeg?q=20' alt='Deals'/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/'>
                    <img className='home-carousel-img' src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f99b6c0fa8aefe27.jpeg?q=20' alt='Deals'/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/'>
                    <img className='home-carousel-img' src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/47267594f95ee09b.jpeg?q=20' alt='deals'/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/'>
                    <img className='home-carousel-img' src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20' alt='deals'/>
                    </Link>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='d-flex flex-row' style={{'marginLeft':'30px'}}>
            <div className='home-category-box'>
                <p className='category-para-home'>Starting 149 | Headphones</p>
                <div className='home-options'>
                    <Link className='link-1' to='/boat-products'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg' alt=''/>
                            <p className='home-option-para'>Starting 249 | boat</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/boult-products'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg' alt=''/>
                            <p className='home-option-para'>Starting 249 | boult</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/noise-products'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg' alt=''/>
                            <p className='home-option-para'>Starting 249 | noise</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/zebronics-products'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg' alt=''/>
                            <p className='home-option-para'>Starting 249 | zebronics</p>
                        </div>
                    </Link>
                    
                </div>
                <Link className='link-1' to='/headphones'>
                    <p className='home-more-para'>See more</p>
                </Link>
                
            </div>
            <div className='home-category-box-2'>
                <p className='category-para-home'>Revamp your home in style</p>
                <div className='home-options'>
                    <Link className='link-1' to='/furniture'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg' alt=''/>
                            <p className='home-option-para'>Cushion covers</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/furniture'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg' alt=''/>
                            <p className='home-option-para'>Figurines</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/furniture'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg' alt=''/>
                            <p className='home-option-para'>Home Storage</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/furniture'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg' alt=''/>
                            <p className='home-option-para'>Lighting solutions</p>
                        </div>
                    </Link>
                </div>
                <Link className='link-1' to='/furniture'>
                    <p className='home-more-para'>See more</p>
                </Link>
            </div>
            <div className='home-category-box-3'>
                <p className='category-para-home'>Min. 40% off | Play time just got better</p>
                <div className='home-options'>
                    <Link className='link-1' to='/toys'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_22._SY116_CB541411275_.jpg'  alt='soft toys'/>
                            <p className='home-option-para'>Soft toys</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/toys'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_11._SY116_CB541414575_.jpg'  alt='Ride ons'/>
                            <p className='home-option-para'>Ride ons</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/toys'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_14._SY116_CB541414575_.jpg'  alt='Indoor games'/>
                            <p className='home-option-para'>Indoor games</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/toys'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_16._SY116_CB541411275_.jpg'  alt='OutDoor games'/>
                            <p className='home-option-para'>OutDoor games</p>
                        </div>
                    </Link>
                </div>
                <Link className='link-1' to='/toys'>
                    <p className='home-more-para'>See more</p>
                </Link>
            </div>
            <div className='home-category-box-3'>
                <p className='category-para-home'>Up to 60% off | Footwear & handbags</p>
                <div className='home-options'>
                    <Link to='/footwear'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Nov13/Sport_low._SY116_CB541153107_.jpg'  alt=''/>
                            <p className='home-option-para'>Sports Shoes</p>
                        </div>
                    </Link>
                    <Link to='/footwear'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Nov13/Shoes_low._SY116_CB541153107_.jpg'  alt=''/>
                            <p className='home-option-para'>Men's Shoes</p>
                        </div>
                    </Link>
                    <Link to='/footwear'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Nov13/Heels_low._SY116_CB541153106_.jpg'  alt=''/>
                            <p className='home-option-para'>Women's Shoes</p>
                        </div>
                    </Link>
                    <Link to='/footwear'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Nov13/HB_Low._SY116_CB541153106_.jpg'  alt=''/>
                            <p className='home-option-para'>Handbags</p>
                        </div>
                    </Link>
                </div>
                <Link to='/footwear'>
                    <p className='home-more-para'>See more</p>
                </Link>
            </div>
        </div>
        <div className='d-flex flex-row' style={{'marginLeft':'30px'}}>
            <div className='home-category-box'>
                <p className='category-para-home'>Under ₹499 | Deals on home improvement essentials</p>
                <div className='home-options'>
                    <Link className='link-1' to='/home-essentials'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg' alt=''/>
                            <p className='home-option-para'>Under <BsCurrencyRupee/> 199 | Cleaning supplies</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/home-essentials'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg' alt=''/>
                            <p className='home-option-para'>Under <BsCurrencyRupee/> 399 | Bathing accessories</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/home-essentials'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg' alt=''/>
                            <p className='home-option-para'>Under <BsCurrencyRupee/> 499 | Home tools</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/home-essentials'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg' alt=''/>
                            <p className='home-option-para'>Under <BsCurrencyRupee/> 299 | Wallpapers</p>
                        </div>
                    </Link>
                    
                </div>
                <Link className='link-1' to='/home-essentials'>
                    <p className='home-more-para'>Explore all</p>
                </Link>
            </div>
            <div className='home-category-box-2'>
                <p className='category-para-home'>Appliances for your home | Up to 55% off</p>
                <div className='home-options'>
                    <Link className='link-1' to='/appliances'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg' alt='Air conditioners'/>
                            <p className='home-option-para'>Air conditioners</p>
                        </div>
                    </Link>
                    <Link className='link-1' to='/appliances'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg' alt='Refrigerators'/>
                            <p className='home-option-para'>Refrigerators</p>
                        </div>
                    </Link>
                    <Link to='/appliances'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg' alt='Microwaves'/>
                            <p className='home-option-para'>Microwaves</p>
                        </div>
                    </Link>
                    <Link to='/appliances'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg' alt='Washing machines'/>
                            <p className='home-option-para'>Washing machines</p>
                        </div>
                    </Link>
                </div>
                <Link to='/appliances'>
                    <p className='home-more-para'>See more</p>
                </Link>
            </div>
            <div className='home-category-box-3'>
                <p className='category-para-home'>Starting ₹199 | Whirlkart Brands & more</p>
                <div className='home-options'>
                    <Link to='/whirlkart-brands'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg'  alt='Bedsheets'/>
                            <p className='home-option-para'>Bedsheets</p>
                        </div>
                    </Link>
                    <Link to='/whirlkart-brands'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg'  alt='Curtains'/>
                            <p className='home-option-para'>Curtains</p>
                        </div>
                    </Link>
                    <Link to='/whirlkart-brands'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg'  alt='Ironing Boards'/>
                            <p className='home-option-para'>Ironing Boards</p>
                        </div>
                    </Link>
                    <Link to='/whirlkart-brands'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg'  alt='Decor'/>
                            <p className='home-option-para'>Decor</p>
                        </div>
                    </Link>
                </div>
                <Link to='/whirlkart-brands'>
                    <p className='home-more-para'>See more</p>
                </Link>
            </div>
            <div className='home-category-box-3'>
                <p className='category-para-home'>Automotive essentials | Up to 60% off</p>
                <div className='home-options'>
                    <Link to='/automotive-essentials'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg'  alt='Cleaning accessories'/>
                            <p className='home-option-para'>Cleaning accessories</p>
                        </div>
                    </Link>
                    <Link to='/automotive-essentials'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg'  alt='Tyre & rim care'/>
                            <p className='home-option-para'>Tyre & rim care</p>
                        </div>
                    </Link>
                    <Link to='/automotive-essentials'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg'  alt='Helmets'/>
                            <p className='home-option-para'>Helmets</p>
                        </div>
                    </Link>
                    <Link to='/automotive-essentials'>
                        <div className='home-option-box'>
                            <img className='home-option-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg'  alt='vacuum cleaner'/>
                            <p className='home-option-para'>Vacuum cleaner</p>
                        </div>
                    </Link>
                </div>
                <Link to='/automotive-essentials'>
                    <p className='home-more-para'>See more</p>
                </Link>
            </div>
        </div>
        <div className='home-category-box-5 d-flex flex-column'>
            <div className='d-flex flex-row'>
                <p className='category-para-home-2'>Top deals for Small businesses</p>
                <Link to='/small-businesses' className='link-1'>
                    <p className='home-more-para-2'>See more</p>
                </Link>
            </div>
            <div className='home-options-2'>
                    <Link className='link-1' to='/small-businesses'>
                            <img className='home-option-img-2' src='https://m.media-amazon.com/images/I/61KQAbb3sTL._AC_SY200_.jpg' alt=''/>
                    </Link>
                    <Link className='link-1' to='/small-businesses'>
                            <img className='home-option-img-2' src='https://m.media-amazon.com/images/I/715eFRvc64L._AC_SY200_.jpg' alt=''/>
                    </Link>
                    <Link className='link-1' to='/small-businesses'>
                            <img className='home-option-img-2' src='https://m.media-amazon.com/images/I/51BAHnLw2rL._AC_SY200_.jpg' alt=''/>
                    </Link>
                    <Link className='link-1' to='/small-businesses'>
                            <img className='home-option-img-2' src='https://m.media-amazon.com/images/I/41poaSimyHL._AC_SY200_.jpg' alt=''/>
                    </Link>
                    <Link className='link-1' to='/small-businesses'>
                            <img className='home-option-img-2' src='https://m.media-amazon.com/images/I/81MasK4CApL._AC_SY200_.jpg' alt=''/>
                    </Link>
                    <Link className='link-1' to='/small-businesses'>
                            <img className='home-option-img-2' src='https://m.media-amazon.com/images/I/61I86OENxtL._AC_SY200_.jpg' alt=''/>
                    </Link>
                    <Link className='link-1' to='/small-businesses'>
                            <img className='home-option-img-2' src='https://m.media-amazon.com/images/I/51nyf95GDVL._AC_SY200_.jpg' alt=''/>
                    </Link>
                    <Link className='link-1' to='/small-businesses'>
                            <img className='home-option-img-2' src='https://m.media-amazon.com/images/I/610Pf1044JL._AC_SY200_.jpg' alt=''/>
                    </Link>
            </div>    
        </div>
        <Footer/>
    </div>

)

export default Home;