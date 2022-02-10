import React, {useState, useEffect} from 'react';
import {Button} from './SignInButton';
import {Link} from 'react-router-dom';
import './Navbar.css';
import "antd/dist/antd.css";
import HighlightIcon from "@material-ui/icons/Highlight";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <HighlightIcon />
                        Good Rental Homes
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>

                            <Link
                                to='/rate-landlord'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Tenants
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/rate-tenant'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Landlords & Agencies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/sign-in'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}

                </div>
            </nav>
        </>
    );
}

export default Navbar;
