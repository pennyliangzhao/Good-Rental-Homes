import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../../css/SignInstyle.css';

function Register() {
    
	{/* Update site title */}
    useEffect(() => {
        document.title = "Register - Good Rental Homes";
    });

	return (
        <>
            <div className="pageHeader">
				<Header title="Register" />
			</div>
                <div className="content">
                    <div className="image">
                        <img src='images/img-7.svg' />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="name">Username</label>
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="Password" />
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
