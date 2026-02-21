import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../components/reducers/userSlice';
import { fetchUserData } from '../../components/reducers/userInfo'; 
import './signin.css';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const error = useSelector((state) => state.user.error);
    useEffect(() => {
        if(error && error.message === "Error: User not found!") {
            setErrorMessage("Invalid credentials!");
        } else if( error && error.message === 'Network error. Please try again later.'){
             setErrorMessage('Network error. Please try again later.');
        }
    }, [error]);

    const handleForm = async (e) => {
        e.preventDefault();

        const postData = {
            email,
            password
        };
        
        dispatch(loginUser(postData)).then((result) => {
            if (!result.error) {
                dispatch(fetchUserData()).then(() => {
                    navigate('/Profile');
                });
            } 
        })
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form ref={form} onSubmit={e => handleForm(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input required autoComplete='email' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" autoComplete="current-password" required id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </form>
            </section>
        </main>
    );
}

export default Signin;
