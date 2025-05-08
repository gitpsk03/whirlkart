import "bootstrap/dist/css/bootstrap.min.css";
import { VscEdit } from "react-icons/vsc";
import Footer from "../Footer";
import './index.css'

const Profile = () => (
    <div className="page-wrapper">
        <div className="profile-con">
            <div>
            <div className='prof-con'>
            <div className="p-5">
                <img className='user-img' src='https://m.media-amazon.com/images/G/01/IdentityAvatarService/Prod/DefaultAvatars/identity-avatar-head-n-shoulder-default-299BD1.png' alt='' />
                <div className="d-flex">
                    <p className='fs-5'>User</p>
                    <VscEdit style={{marginLeft: '5px', marginTop: '8px'}}/>
                </div>
                
            </div>
            <div className="p-5">
                <div>
                    <h3 className="fw-bold">Your Profile</h3>
                    <p>Your profile preferences help us personalise recommendations for you.</p>
                </div>
                <div>
                    <p className="fw-bold fs-5 pt-5">About you</p>
                    <div className="p-2">
                        <div className="d-flex">
                            <p>Preferred department</p>
                            <p style={{marginLeft: "180px"}}>Men</p>
                        </div>
                        <div className="d-flex">
                            <p>Height and weight</p>
                            <p style={{marginLeft: "200px"}}>Height: 164 cm, Weight: 68 kg</p>
                        </div>
                        <div className="d-flex">
                            <p>Age group</p>
                            <p style={{marginLeft: "255px"}}>30-34 yrs</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
    
)

export default Profile