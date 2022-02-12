import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Button } from '../Components/SignInButton';
import Footer from '../Components/Footer';
import '../../css/SignInstyle.css';

function SignIn() {

    {/* Update site title */}
    useEffect(() => {
        document.title = "Sign In - Good Rental Homes";
    });

	const [button, setButton] = useState(true);

	return (
        <>
            <div className="pageHeader">
				<Header title="Sign In" />
            </div>

			<div className="content">
                <div className="image">
                    <img src='images/img-5.svg' />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
						<button type="button" className="button">
							Sign In
						</button>
					</div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default SignIn;
