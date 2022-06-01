import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Puissance4 from './Puissance4';
import '../App.css'
import Moovice from './Moovice';
import Pokemon from './Pokemon';
import Pong from './Pong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineHome, faMoon } from '@fortawesome/free-regular-svg-icons'
import { FaStopwatch, FaCss3Alt, FaBootstrap, FaReact, FaFilm, FaWalking, FaTableTennis } from "react-icons/fa";
import { Link, BrowserRouter as Router, Routes, Route, renderMatches } from "react-router-dom";
import pok from '../images/pok.svg'

const Projets = () => {
  return (
    <div className='main-1'>
      <Puissance4 />
      <div className='iconbar'>
        <Link to='/projets/moovice' className='projet-links'><FaFilm className='film' /><p>Movies</p></Link>
        <Link to='/projets/elsy' className='projet-links'><img src={pok} width='22px' style={{backgroundColor:'#0d6efd', borderRadius:'35px'}}/> <p>Pokemons</p></Link>
        <Link to='/projets/pong' className='projet-links'><FaTableTennis   className='pokeIcon'/><p>Pong Python</p></Link>
      </div>
      
     
    </div>

  )
}

export default Projets