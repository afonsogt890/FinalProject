import React from 'react';
import { ButtonS, ButtonL } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>BEST LFG PLATFORM FOR</h1>
      <p>GAMERS</p>
      <div className='hero-btns'>
        <ButtonS
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN UP
        </ButtonS>
        <ButtonL
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          LOGIN
        </ButtonL>
      </div>
    </div>
  );
}

export default HeroSection;
