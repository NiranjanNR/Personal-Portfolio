import React from 'react';
import Nav from './Nav';
import Body from './Body';
import Scroll from './Scroll';
import Info from './Info/Info';
import Info2 from './Info/Info2';
import Info3 from './Info/Info3';

import { ParallaxProvider } from 'react-scroll-parallax';

const App=()=>{
  return (
    <ParallaxProvider>
      <div className="bg-white	pt-6 px-20 overflow-hidden">
      <Nav />
      <Body />
      <Scroll />
      <Info /> 
       <Info2 />
    </div>
    </ParallaxProvider>
  );
}
export default App;