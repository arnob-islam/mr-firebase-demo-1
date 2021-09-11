import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import Container from '@material-ui/core/Container';
import { useInView } from "react-intersection-observer";


const AboutUs = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <section className='show_case border-top-1' >
            <Container>
                <div className="wrapper">
                    <div className="show_case_wrapper" style={{ overflow: 'hidden' }} ref={ref} >
                        <motion.div animate={controls} initial="hidden"
                            className="showcase__text" transition={{ type: 'spring', stiffness: 300, duration: '1s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-50%' }
                            }}>
                            <div className="underlint__box">
                                <div className='underline__'></div>
                            </div>
                            <div className="title">
                                <h2>
                                    Algorithm
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="showcase__text" transition={{ type: 'spring', stiffness: 300, duration: '1.2s', delay: '1s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-50%' }
                            }}>
                            <div className="underlint__box">
                                <div className='underline__'></div>
                            </div>
                            <div className="title">
                                <h2>
                                    data structure
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="showcase__text" transition={{ type: 'spring', stiffness: 300, duration: '1.5s', delay: '1.44s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-50%' }
                            }}>
                            <div className="underlint__box">
                                <div className='underline__'></div>
                            </div>
                            <div className="title">
                                <h2>
                                    computer learning
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="showcase__text" transition={{ type: 'spring', stiffness: 300, duration: '1.8s', delay: '1.8s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-50%' }
                            }}>
                            <div className="underlint__box">
                                <div className='underline__'></div>
                            </div>
                            <div className="title">
                                <h2>
                                    machine language
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="showcase__text" transition={{ type: 'spring', stiffness: 300, duration: '2s', delay: '2.2s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-50%' }
                            }}>
                            <div className="underlint__box">
                                <div className='underline__'></div>
                            </div>
                            <div className="title">
                                <h2>
                                    binary number
                                </h2>
                            </div>
                        </motion.div>



                    </div>


                </div>
            </Container>
        </section>
    );
}



export default AboutUs
