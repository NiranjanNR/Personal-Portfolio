import React from 'react';
import './Info.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class Info3 extends React.Component {
    render() {
        return (
                <div style={{marginTop:"-700px"}} className="flex justify-center text-3xl m-10 mt-24 bg-sky-100 p-10" id="section2" >
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                        sapiente officiis modi </p>
                </div>
        );
    }
}
export default Info3;