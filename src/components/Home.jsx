import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineHome, faMoon } from '@fortawesome/free-regular-svg-icons'
import { FaHome, FaProjectDiagram, FaRegFileAlt, FaUserPlus } from "react-icons/fa";
import styled from 'styled-components'
import styles from '../App.css'
import { motion } from 'framer-motion'
import TT from '../images/TT.png'
import bg6 from '../images/bg-pics/bg6.jpg'
import bg7 from '../images/bg-pics/bg7.jpg'
import bg8 from '../images/bg-pics/bg8.jpg'
const Div = styled.div`
height: 80vh;
width:80vw;
border:1px solid violet;
color:white;
margin:auto;
margin-top:80px;
h1{
  width:60px;
}




`
const iconStyle = { color: 'navy', width: '60px', fontSize: "2.5em", paddingBottom: '20px' }


const Home = () => {
  const [lines, setLines] = useState('');
  const [picture, setPicture] = useState('');
  // let [counter, setCount] = useState(0)
  let [counter,setCount] = useState(0)
  const [cssValX, setCssValX] = useState('')
  const [cssValY, setCssValY] = useState('');
  const [newCC, setCC] = useState(0)
  const [refDiv, setRefDiv] = useState(null)
  const fRef = useRef(null)
  const imageHandler = () => {
    if (lines !== '') {
      setPicture(TT)
    }

    changer(counter)
    console.log(counter)
  }
  console.log(80 / 3)
  const changer = (variable) => {
    if (counter ===1) {
      console.log(counter)
      setLines('Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iusto consequatur quas perferendis est fugit, a numquam nobis nisi nostrum blanditiis perspiciatis velit sequi illum. Atque, omnis minus! Magnam architecto eaque harum ullam esse veniam! Consequatur ut laboriosam dolores autem. Illo enim libero cum sunt nisi aliquam ullam placeat praesentium facilis doloremque, non voluptates fugit vel quibusdam, tempora reiciendis saepe ex commodi fugiat delectus numquam debitis distinctio aperiam quos? Maxime recusandae architecto in repellat vel dicta laboriosam facilis sequi inventore doloremque id vero repellendus fugit, deserunt obcaecati quod. Magni quod quidem illum labore praesentium tempore, ad consequuntur quaerat molestias assumenda.')
      setPicture(TT)
    } else if (counter === 2) {
      setLines('Polar bear')
      setPicture(bg6)
    } else if (counter === 3) {
      setLines('background THREE')
      setPicture(bg6)
    } else if (counter === 4) {
      setLines('Background FOUR')
      setPicture(bg6)
    } else if (counter === 5) {
      setLines('Background FIFTH')
      setPicture(bg6)
    } else if (counter === 6) {
      setLines('Background SIXTH')
      setPicture(bg6)
    } else if (counter === 7) {
      setLines('Backgroun SEVENTH')
      setPicture(bg6)
    }
  }

  const onMoves = (e) => {

    let width = refDiv.clientWidth;
    let height = refDiv.clientHeight
    let offsetX = e.nativeEvent.offsetX
    let offsetY = e.nativeEvent.offsetY
    const maskX = refDiv.style
    const maskY = refDiv.style
    setCssValX(offsetX)
    setCssValY(offsetY)
    if (newCC > 0) {

      maskX.setProperty('--maskX', cssValX)
      // maskY.setProperty('--maskY', offsetY )
    }

    console.log(e.nativeEvent.offsetX)
    //  fRef.current = refDiv.style.setProperty('maskX', '30')
    //  return  fRef.current/e.nativeEvent.offsetX
    // console.log(fRef.current)
    //  document.documentElement.style.setProperty('maskX', '20');

  }

  return (
    <div className='hm-bg nord' onClick={imageHandler}>
      <div className="-bg-child1" >
        {/*Parcours div*/}
        <div className='div-pro nord' onClick={()=>{setCount(counter =1)}}>
          <h3 className='head3' id='I'> Parcours Professionnelle</h3>
        </div>
        {/*Computer div*/}
        <div className='div-win nord'  onClick={()=>{setCount(counter =2)}}>
          <h3 className='head3' id='I'>Informatique et Dévéloppement</h3>
        </div>
        {/*Skills div*/}
        <div className='div-skill nord'  onClick={()=>{setCount(counter =3)}}>
          <h3 className='head3' id='I'>Compétence professionnelle</h3>
        </div>
        {/*Fr/globe div*/}
        <div className='div-globe nord'  onClick={()=>{setCount(counter =4)}}>
          <h3 className='head3' id='I'>La France et le monde</h3>
        </div>
        {/*Music div*/}
        <div className='div-music nord'  onClick={()=>{setCount(counter =5)}}>
          <h3 className='head3' id='I'>Musique</h3>
        </div>
        {/*Passion div*/}
        <div className='div-passion nord'  onClick={()=>{setCount(counter =6)}}>
          <h3 className='head3' id='I'>Passion</h3>
        </div>
        {/*Passion div*/}
        <div className='div-fcb nord'  onClick={()=>{setCount(counter =7)}}>
          <h3 className='head3' id='I'>Career Football</h3>
        </div>
      </div>

      <div className="-bg-child2"
        onMouseMove={onMoves}
        onMouseEnter={(e) => {
          setRefDiv(e.currentTarget)
          setCC(newCC + 1)
        }}
        ref={refDiv}
      >
        <motion.p className='parc-p'
        >{lines}</motion.p>
        <p className='parc-p1'>{lines}</p>
      </div>
      <div className='name-div'>
      <motion.h1
      style={{fontSize:'2.3vw', fontWeight:'bold'}}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1
        }}
        transition={{ duration: 1 }}
        className='von'>Sayed Erfan</motion.h1>
      <motion.h4
      style={{fontSize:'2vw'}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >Web developer and designer</motion.h4>
      </div>
    </div>
  )
}
<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  hello
</motion.h1>
export default Home
