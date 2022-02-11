import React from 'react';

import SubpageHeader from '../bigComponents/SubpageHeader'
import PageContentItem from '../bigComponents/PageContentItem';
import ServicesSideMenu from '../bigComponents/ServicesSideMenu'

import '../styles/Subpage.scss';

const MultiOfferPage = ({contentDescriptionsData, headerImg, header, text}) => {

  const contentItemsToShow = contentDescriptionsData.map(item => {
    return <PageContentItem key={item.header} header={item.header} text={item.text} imgs={item.imgs}/>
  })

  return ( 
    <div className="wrapper">
      <div className="page">
        <SubpageHeader img={headerImg} header={header} text={text}/>                
        <ServicesSideMenu />
        <div className="page__content">                                  
          {contentItemsToShow}
        </div>
      </div>
    </div>
   );
}
 
export default MultiOfferPage;