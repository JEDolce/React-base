import React from 'react';
import './login.css';
import Google from '../images/google.png';
import Facebook from '../images/facebook.png';
import Github from '../images/github.png';

const google = () => {
    window.open("http://localhost:8000/auth/google", "_self")
};

const github = () => {
    window.open("http://localhost:8000/auth/github", "_self")
};

const facebook = () => {
    window.open("http://localhost:8000/auth/facebook", "_self")
};

export default function Login() {
    return (
        <div className='login'>
            <h1 className='loginTitle'>Choose Login Method</h1>
            <div className='loginWrapper'>
                <div className='left'>
                    <div className='loginBtn google' onClick={google}>
                        <img src={Google} alt="" className='icon' />
                        Google
                    </div>
                    <div className='loginBtn facebook' onClick={facebook}>
                        <img src={Facebook} alt="" className='icon' />
                        Facebook
                    </div>
                    <div className='loginBtn github' onClick={github}>
                        <img src={Github} alt="" className='icon' />
                        Github
                    </div>
                </div>
                <div className='center'>
                    <div className='line' />
                    <div className='or'>OR</div>
                </div>
                <div className='right'>
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <button className='submit'>Submit</button>
                </div>
            </div>
        </div>
    )
}
