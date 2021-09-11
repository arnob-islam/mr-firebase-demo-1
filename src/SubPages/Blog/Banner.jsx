import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import Container from '@material-ui/core/Container';
import { useInView } from "react-intersection-observer";
import TypeIt from "typeit-react";

const WhyChoseUs = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <section className='blog bg-fixed' style={{ background: `url(/img/bg-6.jpg)` }} >
            <Container>
                <div className="wrapper">
                    <div className="blog_wrapper" ref={ref} >
                        <motion.div animate={controls} initial="hidden"
                            className="blog_typing_text" transition={{ type: 'spring', stiffness: 300, duration: '1s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-100%' }
                            }}>


                            <h1>
                                <TypeIt
                                    options={{ loop: true }}
                                    getBeforeInit={(instance) => {
                                        instance.type("Many of life’s failures are people who did not realize how close they were to success when they gave up").pause(1050).type("- Thomas A. Edison");
                                        return instance;
                                    }}
                                />
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}



export default WhyChoseUs
