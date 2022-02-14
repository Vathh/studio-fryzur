import React, { useState } from 'react';

const PageContentImg = ({beforeImg, afterImg}) => {

  const [isReversed, setIsReversed] = useState(false);

  const reverseHandler = () => {
    setIsReversed(!isReversed);
  }

  const styles = {
    backgroundImage: `url(${afterImg})`,
    clipPath: isReversed ? 'circle(120% at 50% 90%)' : 'circle(0 at 50% 90%)'
  }

  return ( 
    <div className="page__card" style={{backgroundImage: `url(${beforeImg})`}}>
      <button className="page__card-btn" onClick={reverseHandler}><i className="fas fa-eye"></i></button>
      <div className="page__card-reverse" style={styles}>         
      </div>
    </div>
   );
}
 
export default PageContentImg;

// {backgroundImage: `url(${afterImg})`}, isReversed ? {clipPath: 'circle(120% at 50% 90%)'} : {clipPath: 'none'}