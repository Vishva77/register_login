import React, { useState } from 'react';
import "../App.css";
import Axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/auth/signup', {
            username,
            email,
            password
        }).then(response => {
            if(response.data.status){
                navigate('/login')
                alert("Registered Successfully")
            }
            // console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor='username'>Username :</label>
                <input type='text' placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor='email'>Email :</label>
                <input type='email' autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='password'>Password :</label>
                <input type='password' autoComplete='off' placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Sign Up</button>
                <p>Already Have an Account ?</p>
                <Link to="/login">Login</Link>
            </form>
        </div>
    );
}

export default Signup;
