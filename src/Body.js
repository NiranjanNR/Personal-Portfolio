import React from 'react';
import './Body.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-scroll-parallax';
AOS.init();
const Body = () => {
  const {innerWidth, innerHeight} = window;
  return (
    <div className="bg--100 container">
      <div className="m-5 mt-28 mx-16 flex lg:flex-nowrap flex-wrap text-neutral-900 text-center lg:text-start justify-center py-4 ">
        <Parallax translateX={['800px', '-800px']} translateY={['-300px', '300px']} opacity={[8,-4]}>
          <div className="" data-aos="fade-right" data-aos-duration="1500">
            <h1 className="xl:text-8xl md:text-6xl text-4xl max-w-3xl tracking-wide	pt-10 md:flex-reverse " >Choose an <br />expert to design your website</h1>
            <div className="flex lg:justify-start justify-center">
              <div className="flex mb-4 mt-5 lg:mb-0 lg:mt-14">
                <div className="flex text-lg px-3 pr-4 bg-indigo-600 hover:bg-indigo-700 text-neutral-100 p-2 text-center">
                  <div className="pr-2">
                    <img alt="" src={require('./eye.png')} height="21" width="24" className=" 	" />
                  </div>
                  <a href={{}}> My work</a>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax translateX={['-800px', '800px']} translateY={['-300px', '300px']}  opacity={[8,-4]}>
        <div className="flex flex-nowrap hidden md:flex " data-aos="fade-left" data-aos-duration="1500">
          <img alt="" src={require('./my.jpeg')} height="200px" width="400px" style={{ minWidth: "400px", maxHeight: "400px" }} className="rounded-full	" />
        </div>
      </Parallax>
    </div>

    </div >
  );
}

export default Body;