import React, { useState } from 'react';

const PageContentImg = ({beforeImg, afterImg, styles}) => {

  const [isReversed, setIsReversed] = useState(false);

  const reverseHandler = () => {
    setIsReversed(!isReversed);
  }

  const cardReverseStyles = {
    backgroundImage: `url(${afterImg})`,
    clipPath: isReversed ? 'circle(120% at 50% 90%)' : 'circle(0 at 50% 90%)'
  }

  return ( 
    <div className={styles.card} style={{backgroundImage: `url(${beforeImg})`}}>
      <button className={styles.cardBtn} onClick={reverseHandler}><i className="fas fa-eye"></i></button>
      <div className={styles.cardReverse} style={cardReverseStyles}>         
      </div>
    </div>
   );
}
 
export default PageContentImg;

// {backgroundImage: `url(${afterImg})`}, isReversed ? {clipPath: 'circle(120% at 50% 90%)'} : {clipPath: 'none'}