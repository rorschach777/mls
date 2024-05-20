import './Quote.css';
import DreamText from './DreamText';

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