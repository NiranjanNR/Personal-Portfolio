import React from 'react';
import './Info.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-scroll-parallax';

AOS.init();

class Info extends React.Component {
    render() {
        return (
            <div className="take">

                <Parallax translateY={['-10px', '10px']} ns>
                    <div className="bg-indigo-100 p-10 m-10 mt-20">
                        <div id="About" className="flex justify-center items-center p-8 ">
                            <h1 className=" inline text-3xl">About</h1>
                        </div>
                        <div className="flex text-2xl   ">

                            <div id="About" className="flex p-5">
                                <h1>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                            </div>
                        </div>
                        <div>
                                <h1 className="text-center text-xl">:P</h1>
                            </div>
                    </div>
                </Parallax>
                <Parallax scale={[1, 1.05]} translateY={['10px', '100px']} opacity={[0.5, 4]}>
                    <div className="flex px-4 justify-center items-center text-6xl">
                        <h1>What am I doing currently?</h1>
                    </div>
                </Parallax>
                <Parallax translateY={['70px', '20px']} >
                    <div className="flex justify-center  text-3xl m-10 mt-24 " >

                        <div id="react" className="">
                            <img alt="" src={require('./img2.png')} height="1100" width="1100" />
                        </div>
                    </div>
                </Parallax>
                <Parallax scale={[1, 1.05]} translateY={['20px', '90px']} opacity={[0.5, 5]}>
                    <div className="flex px-4 justify-center items-center text-6xl">
                        <h1>How is it going?</h1>
                    </div>
                </Parallax>
                <Parallax translateY={['60px', '10px']}>
                    <div className="flex justify-center  text-3xl m-10 mt-24 " >

                        <div id="react" className="">
                            <img alt="" src={require('./img2.png')} height="1100" width="1100" />
                        </div>
                    </div>
                </Parallax>
            </div>
        );
    }
}
export default Info;