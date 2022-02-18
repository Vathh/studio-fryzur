import React from 'react';

import SubpageHeader from '../bigComponents/SubpageHeader'
import PageContentItem from '../bigComponents/PageContentItem';
import ServicesSideMenu from '../bigComponents/ServicesSideMenu'
import ServicesDesktopSideMenu from '../bigComponents/ServicesDesktopSideMenu';

import '../styles/MultiServicePage.scss';

import useWindowWidth from '../hooks/useWindowWidth'

const MultiOfferPage = ({contentDescriptionsData, headerImg, header, text, styles}) => {

  const contentItemsToShow = contentDescriptionsData.map(item => {
    return <PageContentItem key={item.header} header={item.header} text={item.text} imgs={item.imgs} styles={styles}/>
  })

  const { width } = useWindowWidth();

  return ( 
    <div className="wrapper">
      <div className={styles.page}>
        <SubpageHeader img={headerImg} header={header} text={text}/>                
        <div className="services__mainbox">
        {(width > 599) ? <ServicesDesktopSideMenu /> : <ServicesSideMenu /> }
          <div className={styles.content}>
            {contentItemsToShow}
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default MultiOfferPage;
