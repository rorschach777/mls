
'use client'
import background from '../assets/wildflowers.png'
import backgroundColor from '../assets/wildflowers-color.png'
import BePostiveBanner from './BePositiveBanner';
import { MouseEvent } from 'react';
import  {useState,useEffect} from 'react';
import Quote from '../components/Quote'
import './Wildflowers.css';
const Wildflowers = () => {
    const [hover,  setHover] = useState(false);
    useEffect(()=>{
      setHover(false);
    },[])

 

 
    return(
      <>
        <div 
        onMouseEnter={()=>setHover(true)} 
        onMouseLeave={()=>setHover(false)}
        className={`${'wild-flowers'}`}>
          <img src={`${  backgroundColor.src }`}/>
          <img className={hover ? 'u-hide' : ''} src={`${  background.src }`}/> 
        </div>
        <Quote text="MarissaLeighSweitzer"/>
        <span className="lifetime">December 31st, 1985 - May 20th, 2023</span>
        {/* <BePostiveBanner/> */}
      </>

    );
};
export default Wildflowers;