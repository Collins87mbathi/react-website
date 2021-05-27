import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what our hotels means</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Enjoy our luxurious hotel rooms'
              label='luxury'
              path='/services'
            />
            <CardItem
              src='images/image2.jpg'
              text='we have playgrounds for different games of your choice'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image3.jpg'
              text='we have got luxurious swimming pools of all levels'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/image4.jpg'
              text='Enjoy our hot dishes of all categories'
              label='dishes'
              path='/products'
            />
            <CardItem
              src='images/image6.jpg'
              text='You go and see for your self wild animals in our park'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;