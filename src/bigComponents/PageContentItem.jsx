import React from 'react';

import PageContentDescription from '../components/PageContentDescription';
import PageContentImgCard from '../components/PageContentImgCard';

const PageContentItem = ({header, text, imgs, styles}) => {

  const cardsToShow = imgs.map(image => {
    return <PageContentImgCard key={image.id} beforeImg={image.beforeImg} afterImg={image.afterImg} styles={styles}/>
  })

  return ( 
    <div className={styles.item}> 
      <PageContentDescription header={header} text={text} styles={styles}/>  
      <div className={styles.img}>
        {cardsToShow}
      </div>
    </div>  
   );
}
 
export default PageContentItem;