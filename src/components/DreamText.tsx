import { FunctionComponent } from 'react';
import './DreamText.css';

type DreamTextProps = {
    text: string
}

const DreamText : FunctionComponent<DreamTextProps> = (props) => {
    return(
        <span className="dream-text">
            { props.text.split('').map((cur : String, i : number) => { return <span key={`dream-text-span-${i}`}>{cur}</span> })}
        </span>
    );
}
export default DreamText;