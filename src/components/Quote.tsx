import './Quote.css';
import DreamText from './DreamText';
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`

 


interface QuoteProps {
    text : string
}

const Quote = (props : QuoteProps ) => {
    return(
        <p className="quote">
            <DreamText text={props.text} />
        </p>
    );
}
export default Quote;