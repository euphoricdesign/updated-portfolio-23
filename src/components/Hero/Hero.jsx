import { useEffect } from 'react';
// import Typical from 'react-typical'
import { TypeAnimation } from 'react-type-animation';
import imagen1 from '../../images/girl.png';
// import { gsap } from 'gsap';

import { useSpring, animated } from '@react-spring/web'

import './Hero.scss';

const Hero = () => {

    // const timeline = gsap.timeline();

    // useEffect(() => {
    //     const overlay = document.querySelector('.overlay');
    //     timeline.from(overlay, {opacity: 0,  duration: 2.5})
    //     .to(overlay, {opacity: 1})
    // })


    
    return (
        <div className="hero-wrapper">
            <div className="overlay">

                
                <div>
                    <img src={imagen1} className="laptop-girl" alt=""/>
                    <h1 className="my-name"><span className="hi">Hola</span>, Soy Merlina Villecco</h1>
                    <p className="what-i-do">
                            {/* <Typical 
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'Desarrolladora Front-end',
                                    1500,
                                    'Diseñadora Web',
                                    1500
                                ]}
                            /> */}

                            <TypeAnimation
                                sequence={[ 'Desarrolladora Front-end', 1500, 'Diseñadora Web', 1500 ]}
                                style={{ fontSize: '15px', fontFamily: 'M PLUS Rounded 1c', fontWeight: 'bold'}}
                                repeat={Infinity}
                            />
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;