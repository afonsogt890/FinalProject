import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer class="footer">
            <div class="social-icons">
                <Link to="/"><i class="fab fa-facebook"></i></Link>
                <Link to="/"><i class="fab fa-twitter"></i></Link>
                <Link to="/"><i class="fab fa-instagram"></i></Link>
                <Link to="/"><i class="fab fa-youtube"></i></Link>
                <Link to="/"><i class="fab fa-linkedin"></i></Link>
            </div>
  
            <div class="clickable-words">
                <Link to='/privacypolicy'>Privacy Policy</Link>
                <Link to='/aboutus'>About us</Link>
                <Link to='/tos'>Terms of Service</Link>
            </div>
  
            <div class="copyright">
             © All rights reserved G2M, Inc. 2024
            </div>
        </footer>
    )
}

export default Footer;