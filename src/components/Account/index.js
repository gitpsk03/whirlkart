import Footer from '../Footer'
import './index.css'

const Account = () => (
    <div className='page-wrapper'>
    <div className='prof-con'>
    <div className='acc-con'>
        <h1 className='acc-head'>Your Account</h1>
        <div className='acc-sub-con'>
            <div className='acc-btns'>
                <img src='https://img.icons8.com/?size=100&id=67336&format=png&color=000000' className='acc-icon' alt=''/>
                    <div className='acc-btn-con'>
                        <p>Your Orders</p>
                        <p>Track return or buy things again</p>
                    </div>
            </div>
            <div className='acc-btns'>
                <img src='https://img.icons8.com/?size=100&id=WLP4hL0DancH&format=png&color=000000' className='acc-icon' alt=''/>
                    <div className='acc-btn-con'>
                        <p>Login & security</p>
                        <p>Edit login, name and mobile number</p>
                    </div>
            </div>
            <div className='acc-btns'>
                <img src='https://img.icons8.com/?size=100&id=68218&format=png&color=000000' className='acc-icon' alt=''/>
                    <div className='acc-btn-con'>
                        <p>Prime</p>
                        <p>View benifits and payment settings</p>
                    </div>
            </div>
            <div className='acc-btns'>
                <img src='https://img.icons8.com/?size=100&id=gJV8VIyDP8D6&format=png&color=000000' className='acc-icon' alt=''/>
                    <div className='acc-btn-con'>
                        <p>Amazon Pay Balance</p>
                        <p>Add money to your balance</p>
                    </div>
            </div>
            <div className='acc-btns'>
                <img src='https://img.icons8.com/?size=100&id=42952&format=png&color=000000' className='acc-icon' alt=''/>
                    <div className='acc-btn-con'>
                        <p>Contact Us</p>
                        <p>Contact our customer service via phone or chat</p>
                    </div>
            </div>
        </div>
    </div>
    </div>
    <Footer />
  </div>
    
)

export default Account