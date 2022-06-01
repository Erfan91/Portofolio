import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, resolveMotionValue } from 'framer-motion'
const Res = () => {
  
  return (

      <div className='res-div'>
        <div style={{margin:'auto', textAlign:'center'}}>
        <h1>form submitted successfuly <motion.span className='plug'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        >✔</motion.span></h1>
        <Link to='/contact'><button>Back</button></Link>
      </div>
      </div>
   
  )
}

export default Res