import React from 'react';

import SubpageHeader from '../bigComponents/SubpageHeader'
import PageContentDescription from '../components/PageContentDescription';
import PageContentImgCard from '../components/PageContentImgCard'
import ServicesSideMenu from '../bigComponents/ServicesSideMenu'
import ServicesDesktopSideMenu from '../bigComponents/ServicesDesktopSideMenu';

import '../styles/Subpage.scss';

import useWindowWidth from '../hooks/useWindowWidth'

const SingleOfferPage = ({contentDescriptionsData, headerImg, header, text, imgs}) => {

  const contentDescriptionsToShow = contentDescriptionsData.map(item => {
    return <PageContentDescription key={item.text} header={item.header} text={item.text}/>
  })

  const contentImgsToShow = imgs.map(img => {
    return <PageContentImgCard key={img.id} beforeImg={img.beforeImg} afterImg={img.afterImg}/>
  })

  const { width } = useWindowWidth();

  return ( 
    <div className="wrapper">
      <div className="page">
        <SubpageHeader img={headerImg} header={header} text={text}/>                
        <ServicesSideMenu />
        <div className="services__mainbox">
          {(width > 600) && <ServicesDesktopSideMenu />}  
          <div className="page__content"> 
            <div className="page__content-item">
              {contentDescriptionsToShow}
              {contentImgsToShow}
            </div>                                 
        </div>
        </div>
      </div>
    </div>
   );
}
 
export default SingleOfferPage;


