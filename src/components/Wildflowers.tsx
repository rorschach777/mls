
import background from '../assets/wildflowers.png'
import BePostiveBanner from './BePositiveBanner';
import './Wildflowers.css';
const Wildflowers = () => {
    return(
      <>
        <div className="wild-flowers">
        <img src={background.src}/>
        </div>
        <BePostiveBanner/>
      </>

    );
};
export default Wildflowers;