import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import cf from '../images/cf.png';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineHome, faMoon } from '@fortawesome/free-regular-svg-icons'
import { FaStopwatch, FaCss3Alt, FaBootstrap, FaReact, FaFilm, FaWalking, FaTableTennis } from "react-icons/fa";
import styled from 'styled-components';
import { Routes, Router, Route, BrowserRouter, Link } from 'react-router-dom';

const Pokemon = () => {
  const [text, settext] = useState('Login To Gain Access');
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
  // const dolf = (event)=>{
  // console.log(event.currentTarget)
  // }

  const imags = [
    {
      id: 1,
      src: p1
    },
    {
      id: 2,
      src: p2
    },
    {
      id: 3,
      src: p3
    },
    {
      id: 4,
      src: p4
    },
    {
      id: 5,
      src: p5
    },
    {
      id: 6,
      src: p6
    }
  ]

  const dispaly = (number) => {
    if (num === 1) {
      return settext('an API and form submit type project that allows user to gain access after being logged in')
    } else if (num === 2) {
      return settext("While your personal information doesn't match the regex code form wouldn't submit your form informing you by an error message")
    } else if (num === 3) {
      return settext('')
    } else if (num === 4) {
      return settext('4 zZ zZ zZ zZ zZ zz zz z')
    } else if (num === 5) {
      return settext('5 zZ zZ zZ zZ zZ zz zz z')
    } else if (num > 12) {
      setNum(1)
    }


  }
  const iconStyle = { color: 'blue', width: '60px', fontSize: "2em" }
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
            maxWidth: "50vw",
            height: '100%',
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
                  <img src={item.src} alt='image' style={{ backgroundSize: 'cover', maxWidth: '100%', position: 'absolute', top: '0.7%', height: '100%', width: '100%', maxHeight: '100%' }} />
                </SwiperSlide>
              )
            })
          }


          ...
        </Swiper>
      </div>
      <div className='iconbar'>
        <Link to='/projets/moovice' className='projet-links'><FaFilm className='film' /><p>Movies</p></Link>
        <Link to='/projets/moovice/pong' className='projet-links'><FaTableTennis /><p>Pong Python</p></Link>
        <Link to='/projets/puissance' className='projet-links'><img src={cf} alt='Connect Four image' width='20px' style={{ backgroundColor: 'blue' }} /> <p>Puissance 4</p></Link>
      </div>
      <div className='dicon'>
        <span className='one' style={{ display: 'flex' }}><a href='https://reactjs.org/' target='_blank'><FaReact style={iconStyle} /></a><p style={{ marginTop: '6px', color: 'rgb(98, 98, 255)', fontWeight: 'bold' }}>React</p> </span>
        <span className='one' style={{ display: 'flex' }}><a href='https://www.w3.org/TR/CSS/#css' target='_blank'><FaCss3Alt style={iconStyle} /></a><p style={{ marginTop: '6px', color: 'rgb(98, 98, 255)', fontWeight: 'bold', marginLeft: '15px' }}> CSS 3</p></span>
      </div>
      <div>

        <span className='p4span'><p>{text}</p></span>
      </div>


    </div>
  )
}

export default Pokemon;