import React from 'react';

import PageContentDescription from '../components/PageContentDescription';
import PageContentImgCard from '../components/PageContentImgCard';

const PageContentItem = ({header, text, imgs}) => {

  const cardsToShow = imgs.map(image => {
    return <PageContentImgCard key={image.id} beforeImg={image.beforeImg} afterImg={image.afterImg}/>
  })

  return ( 
    <div className="page__content-item"> 
      <PageContentDescription header={header} text={text}/>  
      <div className="page__content-img">
        {cardsToShow}
      </div>
    </div>  
   );
}
 
export default PageContentItem;