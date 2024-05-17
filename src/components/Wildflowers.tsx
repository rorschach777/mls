
'use client'
import background from '../assets/wildflowers.png'
import backgroundColor from '../assets/wildflowers-color.png'
import BePostiveBanner from './BePositiveBanner';
import  {useState,useEffect} from 'react';
import './Wildflowers.css';
const Wildflowers = () => {
    const [colorImage, useColorImage] = useState(false);
    useEffect(()=>{
      useColorImage(false);
    },[])
    return(
      <>
        <div 
        onMouseEnter={()=>{useColorImage(true)}} 
        onMouseLeave={()=>{useColorImage(false)}} 
        className={`${'wild-flowers'}`}>
          <img src={`${  backgroundColor.src }`}/>
          <img className={colorImage ? 'u-hide' : ''} src={`${  background.src }`}/> 
        </div>
        <BePostiveBanner/>
      </>

    );
};
export default Wildflowers;