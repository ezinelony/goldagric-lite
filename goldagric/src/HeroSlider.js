import React from 'react';
import { Slide } from 'react-slideshow-image';



const properties = {
  duration: 5000,
  transitionDuration: 1500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};


const slides = ({images}) => (images.map(
      (imageAndCaption) =>
          (
            <div className="each-slide align-items-center" key={`${imageAndCaption[0]}_${imageAndCaption[1].replace(" ", "")}`}>
             <div className="each-slide-img" style={{'backgroundImage': `url(${imageAndCaption[0]})`}}>
               <span>{imageAndCaption[1]}</span>
             </div>
           </div>
      )
));

const HeroSlideshow = (images) => {
    return (
      <div className="slide-container g-bg-cover__inner g-py-0">
        <Slide {...properties}>
            {slides(images)}
        </Slide>
      </div>
    )
};

export default HeroSlideshow;