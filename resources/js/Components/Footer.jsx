import React from 'react';
import '../../css/Footer.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import HighlightIcon from "@material-ui/icons/Highlight";


import {
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    TwitterIcon,
    WhatsappIcon,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,

} from 'react-share';
import Modal from "./Modal";

function Footer() {
    const shareUrl = window.document.location.href;
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Trusted by 3,536 tenants and 4,336 Landlords/agents with 4,2360 homes.
                    <br/>
                    Join the newsletter to receive reviews of properties & landlords near you.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    {/*<div class='footer-link-items'>*/}
                    {/*<h2>Videos</h2>*/}
                    {/*<Link to='/'>Submit Video</Link>*/}
                    {/*<Link to='/'>Ambassadors</Link>*/}
                    {/*<Link to='/'>Agency</Link>*/}
                    {/*<Link to='/'>Influencer</Link>*/}
                    {/*</div>*/}
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <HighlightIcon/>
                            Good Rental Homes
                        </Link>
                    </div>
                    <small className='website-rights'>GRH © 2022</small>
                    <div className='social-icons'>
                        <Modal/>
                        <FacebookShareButton
                            url={shareUrl}
                            quote={'Send out your first Rate It today!'}
                            hashtag={'#Good_Rental_Homes'}
                        >
                            <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>
                        <WhatsappShareButton
                            url={shareUrl}
                            quote={'Send out your first Rate It today!'}
                            hashtag={'#Good_Rental_Homes'}
                        >
                            <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                        <TwitterShareButton
                            url={shareUrl}
                            quote={'Send out your first Rate It today!'}
                            hashtag={'#Good_Rental_Homes'}
                        >
                            <TwitterIcon size={40} round={true} />
                        </TwitterShareButton>
                        <LinkedinShareButton
                            url={shareUrl}
                            quote={'Send out your first Rate It today!'}
                            hashtag={'#Good_Rental_Homes'}
                        >
                            <LinkedinIcon size={40} round={true} />
                        </LinkedinShareButton>
                        <EmailShareButton
                            url={shareUrl}
                            quote={'Send out your first Rate It today!'}
                            hashtag={'#Good_Rental_Homes'}
                        >
                            <EmailIcon size={40} round={true} />
                        </EmailShareButton>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
