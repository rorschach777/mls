
import background from '../assets/wildflowers.png'
import bepositive from '../assets/bepositive.png'
import './Wildflowers.css';
const Wildflowers = () => {
    return(
    <div className="wild-flowers">
        <img src={background.src}/>
        <img className="bepositive" src={bepositive.src}/>
      </div>
    );
};
export default Wildflowers;