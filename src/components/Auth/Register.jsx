import React, { useState } from 'react'
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://ecom-back-jzey.onrender.com/api/auth/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                const data = await response.json()
                const { password, ...rest } = data.user
                localStorage.setItem('user', JSON.stringify(rest))
                message.success('Kayıt Başarılı')
                navigate('/')
            }
            else {
                message.warning('Kayıt Başarısız')
            }
        } catch (error) {
            console.log("Giriş Hatası:", error)
        }
    }

    return (
        <div className="account-column">
            <h2>Register</h2>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label>
                        <span>Username <span className="required">*</span></span>
                        <input name='username' onChange={handleOnChange} type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email address <span className="required">*</span></span>
                        <input name='email' onChange={handleOnChange} type="email" />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password <span className="required">*</span></span>
                        <input name='password' onChange={handleOnChange} type="password" />
                    </label>
                </div>
                <div className="privacy-policy-text remember">
                    <p>
                        Your personal data will be used to support your experience throughout this website, to
                        manage access to your account, and for other purposes described in our <a
                            href="/">privacy policy.</a>
                    </p>
                    <button className="btn btn-sm">Register</button>
                </div>

            </form>
        </div>
    )
}

export default Register