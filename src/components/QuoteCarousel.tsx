import React from 'react';
// import ReactTextRotator from "react-text-rotator";
import DreamText from './DreamText';
import './QuoteCarousel.css';


const content = [
  // {
  //   text: "\"I will trust in your intentions even through my question marks\"",
  //   className: "classA",
  //   animation: "fade",
  // },
  // {
  //   text: "\"Please don’t be upset. I’m not even upset. It’s just another part of life and living in a sin and diseased riddled world.\"",
  //   className: "classB",
  //   animation: "fade",
  // },
  {
    text: "We shall fight on the beaches.",
    className: "classA",
    animation: "fade",
  },
  {
    text: "We shall fight on the landing grounds.",
    className: "classB",
    animation: "zoom",
    link: "https://example.com/",
  },
  {
    text: "We shall fight in the fields and in the streets.",
    className: "classC",
    animation: "fade",
  },
  {
    text: "We shall fight in the hills.",
    className: "classD",
    animation: "squeeze",
  },
  {
    text: "We shall never surrender...",
    className: "classE",
    animation: "zoom",
    link: "https://google.com/",
  },
];


const QuoteCarousel: React.FC = () => (
  <div className="quote-carousel">
    <DreamText text="I will trust in your intentions even through my question marks."/>
    {/* <ReactTextRotator content={content}time={5000} startDelay={2000} /> */}
  </div>
);

export default QuoteCarousel;