import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "./Button"
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-area">
                    <input type="text" placeholder="Your Email" name="email" className="footer-input" />
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link path="/sign-up">How it works</Link>
                        <Link path="/">Testimonials</Link>
                        <Link path="/">Careers</Link>
                        <Link path="/">Investors</Link>
                        <Link path="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link path="/sign-up">How it works</Link>
                        <Link path="/">Testimonials</Link>
                        <Link path="/">Careers</Link>
                        <Link path="/">Investors</Link>
                        <Link path="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link path="/sign-up">How it works</Link>
                        <Link path="/">Testimonials</Link>
                        <Link path="/">Careers</Link>
                        <Link path="/">Investors</Link>
                        <Link path="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link path="/sign-up">How it works</Link>
                        <Link path="/">Testimonials</Link>
                        <Link path="/">Careers</Link>
                        <Link path="/">Investors</Link>
                        <Link path="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL c 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>

                    </div>
                </div>
            </section >
        </div >
    )
}

export default Footer
