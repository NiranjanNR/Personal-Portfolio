import React from 'react';
import './Info.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-scroll-parallax';

AOS.init();

class Info extends React.Component {
    render() {
        return (
            <div>
                <div className="flex justify-center text-center text-xl m-10 ">
                    <p>This is just a website I created to get familiarized with react and all the libraries that it supports. P.S. This website is still under construction. Stewie Thanks you for your time. Bye! </p><br />
                </div>
                <div className=" mb-10 text-3xl flex justify-center ">:P</div>
            </div>
        );
    }
}
export default Info;