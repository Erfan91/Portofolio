import React from 'react'
import { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineHome, faMoon } from '@fortawesome/free-regular-svg-icons'
import { FaEnvelope, FaLinkedin, FaGithub, FaMailchimp, FaPhone, FaLinkedinIn,FaStar } from "react-icons/fa";
import styled from 'styled-components';
import { motion, resolveMotionValue } from 'framer-motion'
import TT from '../images/TT.png'
import bg6 from '../images/bg-pics/linkPro.png'
import bg7 from '../images/bg-pics/djdjdj.png'
import bg8 from '../images/bg-pics/olo.png';
import Res from './Res';
const Contact = () => {

  const [picG, setPicG] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [starIcon, setStarIcon] = useState('');
  const [count, setCount] = useState(0);
  const [color,setColor] = useState('');
  const forms = (e) => {
    const target = e.target.value;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if(reg.test(target) === false){
      console.log('WARNING')
    }
  
  }

 const changer =()=>{
  if(count === 1){
    setStarIcon({color:'blue'})
  }else  if(count === 2){
    setStarIcon({color:'blue'})
  }else  if(count === 3){
    setStarIcon({color:'blue'})
  }else  if(count === 4){
    setStarIcon({color:'blue'})
  }else  if(count === 5){
    setStarIcon({color:'blue'})
  }
 }


  const onChange = (e)=>{
    if(e.target.value.length > 15){
      setFormMsg('less than 15 characters')
    } else{
      setFormMsg('')
    }
  }

  const [styleIn, setStyle] = useState({display:'none'})
  const [lastName, setLname] = useState({display:'none'})
  const [mail, setMail] = useState({display:'none'})
  const [code, setCode] = useState({display:'none'})

  return (

    <div style={{ border: '1px solid blue', width: '100%', height: '100%', borderLeft: 'none', textAlign: 'center', color: 'blue' }}>
      {/* <h1>Contact Me</h1> */}
      <div className='box' style={{ width: '25%', height: '75%' }}>
        <div style={{ display: 'flex' }} ><a href='tel:07-53-60-89-34' onMouseEnter={() => { setPicG(TT) }} className='phone-ic ic' onMouseLeave={() => { setPicG('') }}><span><FaPhone style={{ marginTop: '10px' }} /></span></a> <p >07-53-60-89-34</p></div>
        <div style={{ display: 'flex' }}><a href='www.gmail.com' onMouseEnter={() => { setPicG(bg8) }} className='mail-ic ic' onMouseLeave={() => { setPicG('') }}><span><FaEnvelope style={{ marginTop: '10px' }} /></span></a> <p >Sa7295402@gmail.com</p></div>
        <div style={{ display: 'flex' }} ><a href='tel:07-53-60-89-34' onMouseEnter={() => { setPicG(bg6) }} className='linkedin-ic ic' onMouseLeave={() => { setPicG('') }}><span><FaLinkedinIn style={{ marginTop: '10px' }} /></span></a> <p >Sayed Erfan</p></div>
        <div style={{ display: 'flex' }}><a href='tel:07-53-60-89-34' onMouseEnter={() => { setPicG(bg7) }} className='github-ic ic' onMouseLeave={() => { setPicG('') }}><span><FaGithub style={{ marginTop: '10px' }} /></span></a> <p >@Erfan91</p></div>
        <div>
          {picG !== '' ? <img src={picG} className='pf-img' /> : <p>hover</p>}
        </div>
      </div>
      <div className='forms-div'>
        <h3>more</h3>
        <form action='/response' style={{marginTop: '-15px'}}>
          <div className='form-name' >
            <label style={{ width: '60%', borderBottom:'2px solid black',borderRadius:'70px' , cursor:'pointer', padding:'5px'}} onClick={()=>{setStyle({display:'block', margin:'auto'})}}>Name</label>
            <input type="name" placeholder='your name' style={styleIn} onChange={onChange} />
            <span style={{display:'block'}}>{formMsg}</span >
            <div>
              <label style={{ width: '60%',  borderBottom:'2px solid black' ,cursor:'pointer',borderRadius:'70px',padding:'5px'}} onClick={()=>{setLname({display:'block', margin:'auto'})}}>Surname</label>
              <input type='name' placeholder='surname'   style={lastName}/>
              <span style={{display:'block'}}>{formMsg}</span >
            </div>
          </div>
          <div>
            <label style={{ width: '60%',  borderBottom:'2px solid black', cursor:'pointer' ,borderRadius:'70px',padding:'5px'}} onClick={()=>{setMail({display:'block', margin:'auto'})}}>Email address</label>
            <input type='email' placeholder='abc@example.com' onChange={forms}  style={mail}/>
          </div>
          <div>
            <label style={{ width: '60%',  borderBottom:'2px solid black',cursor:'pointer',borderRadius:'70px',padding:'5px' }} onClick={()=>{setCode({display:'block', margin:'auto'})}}>Password</label>
            <input type="password" placeholder='Password'  style={code}/>
          </div>
            <motion.button  type='submit' style={{width:'60%', color:'darkgray', border:'2px solid blue', marginTop:'20px', backgroundColor:'black', borderRadius:'3px'}}>Submit</motion.button>
          <div>
            <label style={{ width: '100%', height: '100%', padding:'10px', color:'violet', }} >Comments</label>
            <textarea name="comment" id=""  rows="5" style={{border:'2px solid blue', borderRadius:'5px', backgroundColor:'black', color:'blue', width:'60%'}} maxLength='200' placeholder='your comments here, Any remarks ? '></textarea>
          </div>
          <div className="rate" onChange={changer}>
            <h4>Rate my work</h4>
            <FaStar className='star' ></FaStar>
            <FaStar className='star'></FaStar>
            <FaStar className='star'></FaStar>
            <FaStar className='star'></FaStar>
            <FaStar className='star'></FaStar>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;