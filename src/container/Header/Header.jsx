import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper  section__padding' id='home'>
   <div className='app__wrapper_info'>
    <SubHeading/>
   </div>
   <div className='app__wrapper_img'></div>

  </div>
);

export default Header;
