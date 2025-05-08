import { useState, useContext} from 'react';
import { useNavigate } from "react-router";
import CartContext from '../../context/CartContext';
import './index.css'

const Login = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const {setIsLoginSuccessful} = useContext(CartContext);
    
    const onChangeName= (e) => {
        setName(e.target.value);
    }
    const onChangePassword= (e) => {
        setPassword(e.target.value);
    }
    const onChangeConfirmPassword= (e) => {
        setConfirmPassword(e.target.value);
    }
    const onChangeEmail= (e) => {
        setEmail(e.target.value);
    }
    const onSubmitForm = (e) => {
        e.preventDefault()  
        const emailLen = email.length
        const passwordLen = password.length
        const p=/^[A-Z]{1}[a-z]+[@$#]$/
        const loginEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if(emailLen < 1 || passwordLen < 1 || !loginEmail.test(email) || !p.test(password)) {
            alert('Please fill out all fields and ensure passwords match.')
            return false
        }
        else{
            alert('Login Successful')
        }
        localStorage.setItem('isAuthenticated', 'true')
        setIsLoginSuccessful(true)
        setEmail(' ')
        setPassword(' ')
        navigate('/')
    }
    const onSubmitSignupForm = (e) => {
        e.preventDefault()
        const nameLen = name.length
        const passwordLen = password.length
        const confirmPasswordLen = confirmPassword.length
        const emailLen = email.length
        const signupEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        const signupPassword = /^[A-Z]{1}[a-z]+[@#$]$/
        const signupConfirmPassword = /^[A-Z]{1}[a-z]+[@#$]$/
        if (nameLen < 1 || emailLen < 1 || passwordLen < 1 || confirmPasswordLen < 1 || !signupEmail.test(email) || !signupPassword.test(password) || !signupConfirmPassword.test(confirmPassword)) {
            alert('Please fill all fields')
            return false            
        } else if (password !== confirmPassword) {
            alert('Password do not match')
        }
        else{
            alert('Signup Successful')
        }
        setName(' ')
        setEmail(' ')
        setPassword(' ')
        setConfirmPassword(' ')
        navigate('/login')
    }
    return(
            <div>
                <h1 className='login-heading'>Whirlkart.in</h1>
                {isLoginActive ? (<div className='login-container'>
                <form onSubmit={onSubmitForm} className='login-form-container'>
                    <div className='login-form-type'>
                            <button className='login-left-btn' onClick={() => setIsLoginActive(true)}>Login</button>
                            <button className='login-right-btn' onClick={() => setIsLoginActive(false)}>Signup</button>
                    </div>
                    <div className='login-label-input'>
                        <label>Email</label>
                        <input className='login-input' type='text' onChange={onChangeEmail}/>
                    </div>
                    <div className='login-label-input'>
                        <label>Password</label>
                        <input className='login-input' type='password' onChange={onChangePassword}/>
                    </div>
                    <button type='submit' className='login-btn'>Login</button>
                </form>
                <hr/>
                <p style={{'marginLeft':'650px'}}>© 1996 - 2025, Whirlkart.in</p>
            </div>
            ) : (
                <div className='login-container'>
                <form onSubmit={onSubmitSignupForm} className='login-form-container-2'>
                    <div className='login-form-type'>
                            <button className='login-left-btn-2' onClick={() => setIsLoginActive(true)}>Login</button>
                            <button className='login-right-btn-2' onClick={() => setIsLoginActive(false)}>Signup</button>
                    </div>
                    <div className='login-label-input'>
                        <label>Name</label>
                        <input className='login-input' type='text' onChange={onChangeName}/>
                    </div>
                    <div className='login-label-input'>
                        <label>Email</label>
                        <input className='login-input' type='text' onChange={onChangeEmail}/>
                    </div>
                    <div className='login-label-input'>
                        <label>Password</label>
                        <input className='login-input' type='password' onChange={onChangePassword}/>
                    </div>
                    <div className='login-label-input'>
                        <label>Confirm Password</label>
                        <input className='login-input' type='password' onChange={onChangeConfirmPassword}/>
                    </div>
                    <button type='submit' className='login-btn'>SignUp</button>
                </form>
                <hr/>
                <p style={{'marginLeft':'650px'}}>© 1996 - 2025, Whirlkart.in</p>
            </div>
            )}
            </div>
        )
    }

export default Login