import CardItem from './CardItem';
import React from 'react';
import './Cards.css';

function Cards() {
    return (
      <div className='cards'>
        <h1>LOOK AT THE PLAYERS WAITING FOR YOU</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-1.jpg'
                text='"I host hardcore minecraft servers!!!" - Minecraft Player'
                label='Minecraft'
                path='/signup'
              />
              <CardItem
                src='images/img-1.jpg'
                text='"Looking for team for pro scene." - LoL Player'
                label='League of Legends'
                path='/signup'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img-1.jpg'
                text='"Searching for a soulmate as stuck as me in silver!" - Valorant Player'
                label='Valorant'
                path='/signup'
              />
              <CardItem
                src='images/img-1.jpg'
                text='"Looking for coach for pushing higher ranks!" - Dota 2 Player'
                label='Dota 2'
                path='/signup'
              />
              <CardItem
                src='images/img-1.jpg'
                text='"Looking for 2 other people to delve de frost dungeon." - DaD Player'
                label='Dark and Darker'
                path='/signup'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Cards;