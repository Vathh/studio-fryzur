import React from 'react';

const PageContentImg = ({beforeImg, afterImg}) => {
  return ( 
    <div className="page__card" style={{backgroundImage: `url(${beforeImg})`}}>
      <button className="page__card-btn"><i className="fas fa-eye"></i></button>
      <div className="page__card-reverse" style={{backgroundImage: `url(${afterImg})`}}>         
      </div>
    </div>
   );
}
 
export default PageContentImg;