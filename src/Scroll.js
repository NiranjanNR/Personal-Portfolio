import React from 'react';
// import Info from './Info';
import {Parallax} from 'react-scroll-parallax';
class Scroll extends React.Component {
    render(){
        return (
            <Parallax opacity={[2,-3]}>
                <div className="flex justify-center text-2xl animate-bounce mt-20">
                <a href={{}}><img alt="" src={require('./arrow.png')} height="30px" width="30px" /></a>

            </div>
            </Parallax>
        );
    }
}
export default Scroll;