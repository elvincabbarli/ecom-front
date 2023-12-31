import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd';
import { CartContext } from '../../context/CardProvider';

// import dotenv from  'dotenv'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const { setIsLogged } = useContext(CartContext);


    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://ecom-back-jzey.onrender.com/api/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                const data = await response.json()
                localStorage.setItem('user', JSON.stringify(data))
                message.success('Giriw Başarılı')
                setIsLogged(true)
                if(data.role === 'admin'){
                    window.location.href = '/admin'
                }
                else{
                    navigate('/')
                }
            }
            else {
                message.warning('Giriw Başarısız')
            }
        } catch (error) {
            console.log("Giriş Hatası:", error)
        }
    }
    return (
        <div className="account-column">
            <h2>Login</h2>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label>
                        <span>Username or email address <span className="required">*</span></span>
                        <input type="text" name='email' onChange={handleOnChange} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password <span className="required">*</span></span>
                        <input type="password" name='password' onChange={handleOnChange} />
                    </label>
                </div>
                <p className="remember">
                    <label>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <button className="btn btn-sm">Login</button>
                </p>
                <a href="/" className="form-link">Lost your password?</a>
            </form>
        </div>
    )
}

export default Login