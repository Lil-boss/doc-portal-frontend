import React from 'react';
import footer from "../../assets/images/footer.png"
const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url(${footer})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }} className="mb-10 h-[400px]">
            <div className='footer p-10 text-base-content '>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Marketing</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div>
                <p className='text-center p-10'>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;