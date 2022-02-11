import React from 'react';

const PageContentDescription = ({header, text}) => {
  return ( 
    <div className="page__content-description">
      <h3 className="page__content-description-header">{header}</h3> 
      <p className="page__content-description-text">{text}</p>
    </div>
   );
}
 
export default PageContentDescription;