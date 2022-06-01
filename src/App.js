import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineHome, faMoon } from '@fortawesome/free-regular-svg-icons'
import { FaHome, FaProjectDiagram, FaRegFileAlt, FaUserPlus } from "react-icons/fa";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Power3 } from "gsap";
import styles from "./App.css";
import Home from './components/Home';
import Projets from './components/Projets';
import Cv from './components/Cv';
import Contact from './components/Contact';
import Moovice from './components/Moovice';
import Pokemon from './components/Pokemon';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Pong from './components/Pong';
import Puissance4 from './components/Puissance4';
import Res from './components/Res';

const Section = styled.section`
height:100vh;
display:flex;

`;
const iconStyle = { color: '#0d6efd', width: '60px', fontSize: "2.5em", paddingBottom: '20px' }
function App() {
  const [text, setText] = useState('');
  const [name, setName] = useState('')
  return (
    <Section className='lgh'>


      <div className='vnv'>
        <span><a target='_blank' href='https://www.linkedin.com/in/sayed-erfan-homepg/'>SE</a></span>
        <motion.span className='Tb'
          animate={{
            x: 0,
            backgroundColor: "#000",
            boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
            position: "fixed",

          }}
          whileHover={{ scale: 1.2, color:'aqua' }}
        >{name}</motion.span>
        <div className='center'>
          <Link to='/'><FaHome
            className='jj one' style={iconStyle} onClick={() => { return setName('Home') }} onMouseEnter={() => { return setText('Home') }} onMouseLeave={() => { return setText('') }} /></Link>
          <Link to='/projets'><FaProjectDiagram className='jj one' style={iconStyle} onClick={() => { return setName('Projets') }} onMouseEnter={() => { return setText('Projets') }} onMouseLeave={() => { return setText('') }} /></Link>
          <Link to='/Cv'><FaRegFileAlt className='jj one' style={iconStyle} onClick={() => { return setName('Resume') }} onMouseEnter={() => { return setText('Resume') }} onMouseLeave={() => { return setText('') }} /></Link>
          <Link to='/contact'><FaUserPlus className='jj one' style={iconStyle} onClick={() => { return setName('Contact') }} onMouseEnter={() => { return setText('Contact') }} onMouseLeave={() => { return setText('') }} /></Link>
        </div>
      </div>
      <motion.span className='gb'><strong>{text}</strong></motion.span>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projets/*'  element={<Projets />} />
         <Route path='/projets/moovice' element={<Moovice/>}/>
         <Route path='/projets/elsy' element={<Pokemon/>}/>
         <Route path='/projets/pong' element={<Pong/>}/>
         <Route path='/projets/moovice/elsy' element={<Pokemon/>}/>
          <Route path='projets/moovice/pong' element={<Pong/>}/>
          <Route path='/projets/moovice/puissance' element={<Puissance4/>}/>
          <Route path='/projets/elsy/pong' element={<Pong/>}/>
          <Route path='/projets/elsy/moovice' element={<Moovice/>}/>
          <Route path='/projets/elsy/puissance' element={<Puissance4/>}/>
          <Route path='/projets/pong/puissance' element={<Puissance4/>}/>
          <Route path='/projets/pong/moovice' element={<Puissance4/>}/>
          <Route path='/projets/pong/elsy' element={<Puissance4/>}/>
        <Route path='/Cv' element={<Cv />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/response' element={<Res/>}/>
      </Routes>


    </Section>
  );
}

{/*        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          hello
        </motion.h1> */}
export default App;