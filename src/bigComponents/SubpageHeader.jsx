import React from 'react';

const SubpageHeader = ({img, header, text}) => {
  return ( 
    <div className="services__header" style={{backgroundImage: `url(${img})`}}>
      <div className="services__header-shadow"></div>
      <h2 className="services__header-top">{header}</h2>
      <p className="services__header-text">{text}</p>
    </div>
   );
}
 
export default SubpageHeader;