import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineHome, faMoon } from '@fortawesome/free-regular-svg-icons'
import {FaStopwatch, FaCss3Alt,FaBootstrap,FaReact,FaFilm, FaWalking,FaTableTennis } from "react-icons/fa";
import styled from 'styled-components';
import Moovice from './Moovice';
import { Routes,Router, Route,BrowserRouter, Link } from 'react-router-dom';


const Puissance4 = (props) => {

  const [text, settext] = useState('Connect 4 a project that was given to me by My formateurs  to improve my front-end skills using react and CSS,  ');
  const [color, setColor] = useState('blue')
  const bold = (event)=>{
    const div = Array.from(event.currentTarget.children)
    const dChild = Array.from(div[0])
    const btnNext = div[0].children[1]; 
    
     btnNext.addEventListener('click', settext('Game functionality is 100%, Game stops if any palyer(Red, Yellow) connected four circles faster Horizontaly, Verticaly, or Digonal. when they win, game changes its background color by help of React '));
    const btnPrev = div[0].children[0];
    // btnPrev.addEventListener('click',settext('Connect 4 a project that was given to me by My formateurs  to improve my front-end skills using react and CSS'))
  }

  const iconStyle = { color:color, width: '60px', fontSize: "2em" }
  const imags = [
    {
      id: 1,
      src: img3
    },
    {
      id: 2,
      src: img4
    },
    {
      id: 3,
      src: img5
    }
  ]


  return (
    <div>
    <div className='opps' onClick={bold}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        style={{
          width: '800px',
          height: '400px',
          marginTop: '60px',
          borderRadius: '20px',
          border:'1px solid blue'
        }}
      >

        {/* */}
        {
          imags.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item.src} alt='image' style={{ backgroundSize: 'cover', width: '55vw' }} />
              </SwiperSlide>
            )
          })
        }


        ...
      </Swiper>
     
    </div>
    <div className='dicon'>
      <span className='one' style={{display:'flex'}}><FaStopwatch style={iconStyle}/><p style={{marginTop:'6px', color:'rgb(98, 98, 255)', fontWeight:'bold'}}>3 Days</p> </span>
      <span className='one'><a href='https://reactjs.org/' target='_blank' className='reactIcon'><FaReact style={iconStyle} className='reactIcon'/></a> <a href='https://www.w3.org/TR/CSS/#css' target='_blank'><FaCss3Alt style={iconStyle}/></a> <a href='https://getbootstrap.com/' target='_blank'><FaBootstrap style={iconStyle}/></a></span>
    </div>
    
    <span className='p4span'>{text}</span>
   
    </div>
  )
}

export default Puissance4