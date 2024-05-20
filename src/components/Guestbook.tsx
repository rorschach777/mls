'use client'
import '../components/Guestbook.css';
import { guestbookData } from '../data/guestbook-2' 
import DreamText from './DreamText';

interface data {
    content: string,
    author: string,
    visibile: boolean
}
const data =  guestbookData.posts;
const Guestbook = () => {
    return(
        <section className="dark-bg">
            
            <div className="guestbook ">
                <div className="guestbook-title">
                    <h2>
                        <span>M</span>
                        <span>e</span>
                        <span>m</span>
                        <span>o</span>
                        <span>r</span>
                        <span>i</span>
                        <span>e</span>
                        <span>s</span>
                    </h2>
                </div>
                <div className="wrapper">
                    {data.map((c,i)=>{return (
                           c.visible ? 
                           <div className="guestbook-entry" key={`guestbook-entry-${i}`}>
                               <DreamText text={c.content}/> 
                               {/* <span>
                                   {c.author}
                               </span> */}
                           </div> : null
                    )})}
                </div>
            </div>
        </section>
    );
}
export default Guestbook;