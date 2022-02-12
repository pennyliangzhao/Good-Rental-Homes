import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../../css/SignInstyle.css';

function SignIn() {

    {/* Update site title */}
    useEffect(() => {
        document.title = "Sign In - Good Rental Homes";
    });

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
