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
  const [counter, setCount] = useState(0)
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
    if (counter >0) {
      console.log(counter)
      // setLines("arrivé en france en 2019, après avoir obtenu mes papiers en 2020 j'ai commencé à apprendre le français en quatre mois grâce à mission locale, peu de temps après le cours de langue j'ai obtenu un job étudiant comme enquêteur des transports annoncé par la RATP. en travaillant comme enquêteur, j'ai acquis ma première expérience professionnelle dans le monde du travail français, grâce à cette expérience j'ai appris à comprendre comment travailler professionnellement et j'ai acquis certaines compétences pour m'adapter dans le mond de travil, apprendre rapidement, être autonome pendant que j'étais le responsable pour certaines missions et pour être ponctuel car nous devions assurer le service avant le début des transports en commun, et j'ai appris à être concentré et attentif dans le calcul et à la fin du quart de travail je devais rapporter les résultats d'enquête à notre responsable.")
      setLines('Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iusto consequatur quas perferendis est fugit, a numquam nobis nisi nostrum blanditiis perspiciatis velit sequi illum. Atque, omnis minus! Magnam architecto eaque harum ullam esse veniam! Consequatur ut laboriosam dolores autem. Illo enim libero cum sunt nisi aliquam ullam placeat praesentium facilis doloremque, non voluptates fugit vel quibusdam, tempora reiciendis saepe ex commodi fugiat delectus numquam debitis distinctio aperiam quos? Maxime recusandae architecto in repellat vel dicta laboriosam facilis sequi inventore doloremque id vero repellendus fugit, deserunt obcaecati quod. Magni quod quidem illum labore praesentium tempore, ad consequuntur quaerat molestias assumenda.')
      setPicture(TT)
    } else if (counter === 'B') {
      setLines('Polar bear')
      setPicture(bg6)
    } else if (counter === 'C') {
      setLines('background THREE')
      setPicture(bg6)
    } else if (counter === 'D') {
      setLines('Background FOUR')
      setPicture(bg6)
    } else if (counter === 'E') {
      setLines('Background FIFTH')
      setPicture(bg6)
    } else if (counter === 'F') {
      setLines('Background SIXTH')
      setPicture(bg6)
    } else if (counter === 'G') {
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
        <div className='div-pro nord' onClick={()=>{setCount(+1)}}>
          <h3 className='head3' id='I'> Parcours Professionnelle</h3>
        </div>
        {/*Computer div*/}
        <div className='div-win nord'>
          <h3 className='head3' id='I'>Informatique et Dévéloppement</h3>
        </div>
        {/*Skills div*/}
        <div className='div-skill nord'>
          <h3 className='head3' id='I'>Compétence professionnelle</h3>
        </div>
        {/*Fr/globe div*/}
        <div className='div-globe nord'>
          <h3 className='head3' id='I'>La France et le monde</h3>
        </div>
        {/*Music div*/}
        <div className='div-music nord'>
          <h3 className='head3' id='I'>Musique</h3>
        </div>
        {/*Passion div*/}
        <div className='div-passion nord'>
          <h3 className='head3' id='I'>Passion</h3>
        </div>
        {/*Passion div*/}
        <div className='div-fcb nord'>
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
{/* <Div className='class-div' onClick={imageHandler}>

    <div className='div-pro' style={{ width: '36.5% ', height: '9%', border: '1px solid violet', textAlign: 'center', borderTop: 'none', borderLeft: 'none' }} onClick={() => { setCount('A') }}>
      <h3 className='head3' id='Ip'> Parcours Professionnelle</h3>
    </div>
    <div className='nord div-win' style={{ width: '36.5% ', height: '9%', border: '1px solid violet', textAlign: 'center', borderTop: 'none', borderLeft: 'none' }} onClick={() => { setCount('B') }}>  <h3 className='head3' id='I'>Informatique et Dévéloppement</h3></div>
    <div className='nord div-skill' style={{ width: '36.5% ', height: '9%', border: '1px solid violet', textAlign: 'center', borderTop: 'none', borderLeft: 'none' }} onClick={() => { setCount('C') }}>  <h3 className='head3' id='ii'>Compétence professionnelle</h3></div>
    <div className='nord div-globe' style={{ width: '36.5% ', height: '9%', border: '1px solid violet', textAlign: 'center', borderTop: 'none', borderLeft: 'none' }} onClick={() => { setCount('D') }}>  <h3 className='head3' id='iii'>La France et le monde</h3></div>
    <div className='nord div-music' style={{ width: '36.5% ', height: '9%', border: '1px solid violet', textAlign: 'center', borderTop: 'none', borderLeft: 'none' }} onClick={() => { setCount('E') }}>  <h3 className='head3' id='i4'>Musique</h3></div>
    <div className='nord div-passion' style={{ width: '36.5% ', height: '9%', border: '1px solid violet', textAlign: 'center', borderTop: 'none', borderLeft: 'none' }} onClick={() => { setCount('F') }}>  <h3 className='head3' id='i5'>Passion</h3></div>
    <div className='nord div-fcb' style={{ width: '36.5% ', height: '9%', border: '1px solid violet', textAlign: 'center', borderTop: 'none', borderLeft: 'none' }} onClick={() => { setCount('G') }}>  <h3 className='head3' id='i6'>Career Football</h3></div>
    <div className='mainDiv'
    onMouseMove={onMoves}
    onMouseEnter={(e)=>{
    setRefDiv(e.currentTarget)
    setCC(newCC +1)
  }}
  ref={refDiv}
    >
      <motion.p
      className='parc-p'
      >{lines}</motion.p>
      <p className='parc-p1'>{lines}</p>
    </div>
    <div className='offset-md-3 id-div page'>
      <motion.h1
        style={{ maxWidth: '100%', width: '100%' }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1
        }}
        transition={{ duration: 1 }}
        className='von'>Sayed Erfan</motion.h1>
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >Web developer and designer</motion.h4>

    </div>
    <img src={TT} width='50%' style={{ position: 'absolute', transform: 'translate(74%)', top: '25.9%' }} />

  </Div> */}