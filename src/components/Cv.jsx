import { filterProps } from 'framer-motion'
import React from 'react'
import cvb from '../images/cvb.png'
const Cv = () => {
  return (
    
      
       <div className='bluri-div'>
         <div className='off-gray ' style={{backgroundColor:'#737373', width:'100%', height:'27.6%', borderBottom:'1px solid blue',  borderTop:'1px solid blue', borderRight:'1px solid blue'}}></div>
         
         <div className="black-side"></div>
        <img src={cvb} width='40%' height='97%' style={{margin:'auto', position:'absolute', top:'2.9%', transform:'translate(55%)', border:'1px solid blue', }}/>
       </div>
      
    
  )
}

export default Cv