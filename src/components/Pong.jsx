import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import pong1 from '../images/pong1.png';
import pong2 from '../images/pong2.png';
import img5 from '../images/img5.png';
import cf from '../images/cf.png';
import { motion } from 'framer-motion';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineHome, faMoon } from '@fortawesome/free-regular-svg-icons'
import {FaStopwatch, FaCss3Alt,FaBootstrap,FaReact,FaFilm,FaWalking,FaTableTennis,FaPython} from "react-icons/fa";
import styled from 'styled-components';
import { Routes,Router, Route,BrowserRouter, Link } from 'react-router-dom';
import pok from '../images/pok.svg';
import turtle from '../images/turtle.svg';
const Pong = () => {
  const [text, settext] = useState('Form oriented pokemon project');
  const [headI, setHeadI] = useState('')
  const bold = (event)=>{
    const div = Array.from(event.currentTarget.children)
    const dChild = Array.from(div[0])
    const btnNext = div[0].children[1]; 
    
     btnNext.addEventListener('click', settext('hello how are you'));
    const btnPrev = div[0].children[0];
  
    // btnPrev.addEventListener('click',settext('Connect 4 a project that was given to me by My formateurs  to improve my front-end skills using react and CSS'))
    
  }
  const imags = [
    {
      id: 1,
      src: pong1
    },
    {
      id: 2,
      src: pong2
    }
  ]
  const iconStyle = { color:'blue', width: '60px', fontSize: "2em" }
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
          border:'1px solid blue'
        }}
      >

        {/* */}
        {
          imags.map((item, index) => {
            return (
              <SwiperSlide className='LL' key={index}>
                <img src={item.src} alt='image' style={{ backgroundSize: 'cover', width: '50vw',height:'400px' }} />
              </SwiperSlide>
            )
          })
        }


        ...
      </Swiper>
     
    </div>
       <div className='iconbar'>
        <Link to='/projets/puissance' className='projet-links'><img src={cf} alt='Connect Four image' width='20px' style={{backgroundColor: '#0d6efd'}}/><p onMouseEnter={()=>{setHeadI('Goal')}}>Puissance</p></Link>
        <Link to='/projets/moovice' className='projet-links'><FaFilm /><p>Movies</p></Link>
        <Link to='/projets/elsy' className='projet-links'><img src={pok} width='22px' style={{backgroundColor:'#0d6efd', borderRadius:'35px'}}/> <p>Pokemons</p></Link>
        <motion.h1
        initial={{opacity:0.1, color:'blue'}}
        animate={{ opacity:1, color:'violet'}}
        whileDrag={{fontSize:'30px', color:'red'}}
        style={{margin:'auto'}}>{headI}</motion.h1>
      </div>

      <div className='dicon'>
      <span
      className='one' style={{display:'flex'}}><a href='https://www.python.org/' target='_blank'><FaPython style={iconStyle}/></a><p style={{marginTop:'6px', color:'rgb(98, 98, 255)', fontWeight:'bold'}}>Python</p> </span>
      <span className='one' style={{display:'flex'}}><a href='https://pythonturtle.org/' target='_blank'><img src={turtle} alt='Connect Four image' width='20px' style={{backgroundColor: 'blue', borderRadius:'17px', width:'28px', height:'35px'}}/></a><p style={{marginTop:'6px', color:'rgb(98, 98, 255)', fontWeight:'bold',marginLeft:'15px'}}> turtle graphics</p></span>
    </div>
    <span className='p4span'>{text}</span>
    </div>

  )
}

export default Pong