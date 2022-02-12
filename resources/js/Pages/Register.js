import React from 'react';
import '../../css/App.css';
import Footer from '../Components/Footer';
import '../../css/SignInstyle.css';

function Register() {
    return (
        <>
            <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src='images/img-7.svg' />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Address</label>
                            <input type="text" name="address" placeholder="address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="password" />
                        </div>
                        <div className="footer">
                            <button type="button" className="btn">
                                Register
                            </button>
                        </div>
                    </div>
                </div>

            <Footer />
        </>
    );
}

export default Register;
