import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';
import cf from '../images/cf.png';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineHome, faMoon } from '@fortawesome/free-regular-svg-icons'
import { FaStopwatch, FaCss3Alt, FaBootstrap, FaReact, FaFilm, FaWalking, FaTableTennis } from "react-icons/fa";
import styled from 'styled-components';
import { Routes, Router, Route, BrowserRouter, Link } from 'react-router-dom';
import pok from '../images/pok.svg'
const Moovice = (props) => {
  const [text, settext] = useState('Movies, a Project that lets user to see the most recent movies and purchase them');
  const [num, setNum] = useState(1)
  const [variable, setVar] = useState(null)
  const [color, setColor] = useState('blue')

  const bold = (event) => {
    const div = Array.from(event.currentTarget.children)
    const dChild = Array.from(div[0])
    const btnNext = div[0].children[1];

    btnNext.addEventListener('click', setNum(num + 1), console.log(num));
    const btnPrev = div[0].children[0];
    setVar(btnPrev)
    // btnPrev.addEventListener('click',settext('Connect 4 a project that was given to me by My formateurs  to improve my front-end skills using react and CSS'))
    dispaly(num)
  }

  const dispaly = (number) => {
    if (num === 1) {
      return settext('Thanks to react-router-dom and react promise, this application is made out of several pages that helps the user to see the most popular movies released recently and to choose the best from the movies nominated for weekly battle, and it lets you save your movies any page and find them in favorit movies page')
    } else if (num === 2) {
      return settext('at the end we have a user who enjoys using this user friendly website')
    } else if (num > 2) {
      setNum(1)
    }


  }

  const iconStyle = { color: 'blue', width: '60px', fontSize: "2em" }
  const imags = [
    {
      id: 1,
      src: img6
    },
    {
      id: 2,
      src: img7
    },
    {
      id: 3,
      src: img8
    }
  ]

  return (
    <div className='main-1'>

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
            border: '1px solid blue'
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
      <div className='iconbar'>
        <Link to='/projets/moovice/elsy' className='projet-links'><img src={pok} width='22px' style={{ backgroundColor: '#0d6efd', borderRadius: '35px' }} /> <p>Pokemons</p></Link>
        <Link to='/projets/moovice/pong' className='projet-links'><FaTableTennis className='pokeIcon' /><p>Pong Python</p></Link>
        <Link to='/projets/puissance' className='projet-links'><img src={cf} alt='Connect Four image' width='20px' style={{ backgroundColor: '#0d6efd' }} /> <p>Puissance 4</p></Link>
      </div>
      <div>
        <span className='p4span'><p>{text}</p></span>
      </div>
    </div>


  )
}

export default Moovice