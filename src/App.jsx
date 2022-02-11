import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import NavMobile from './layouts/NavMobile';
import NavLarge from './layouts/NavLarge';
import HomeHeader from './bigComponents/HomeHeader';
import Footer from './layouts/Footer';
import Page from './layouts/Page';

import './App.scss';

const App = () => {
  return ( 
    
    <Router>
      {<NavMobile />}
      {<NavLarge />}
      {<HomeHeader />}
      <main>
        {<Page />}
      </main>
      {<Footer />}
    </Router>
    
   );
}
 
export default App;