import React from 'react';
import './Footer.css';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className="footer">
            <p>Copyright &copy; {year} Ema Jhon. All rights reserved.</p>
        </div>
    );
};

export default Footer;