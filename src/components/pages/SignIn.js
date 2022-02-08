import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './SignInstyle.css';
// export default function SignIn() {
//     return <h1 className='sign-in'>SIGN IN</h1>;
// }

function SignIn() {
    return (
        <>
            <div className="header">Sign In</div>
            <div className="content">
                <div className="image">
                    <img src='images/img-5.svg' />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                    <div className="footer">
                        <button type="button" className="btn">
                            Login
                        </button>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default SignIn;
