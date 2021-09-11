import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import Container from '@material-ui/core/Container';
import { useInView } from "react-intersection-observer";


const WhyChoseUs = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <section className='chose__us show_case bg-fixed' style={{ background: `url(/img/bg-5.jpg)` }} >
            <Container>
                <div className="wrapper" style={{ overflow: 'hidden' }}>
                    <div className="show_case_wrapper" ref={ref} >
                        <motion.div animate={controls} initial="hidden"
                            className="showcase__text" transition={{ type: 'spring', stiffness: 300, duration: '1s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-100%' }
                            }}>
                            <div className="underlint__box">
                                <div className='underline__'></div>
                            </div>
                            <div className="title">
                                <h2>
                                    Congue soleat meliore pri
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="showcase__text" transition={{ type: 'spring', stiffness: 300, duration: '1.2s', delay: '1s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-100%' }
                            }}>
                            <div className="underlint__box">
                                <div className='underline__'></div>
                            </div>
                            <div className="title">
                                <h2>
                                    Duo detracto molestiae cu,
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="showcase__text" transition={{ type: 'spring', stiffness: 300, duration: '1.5s', delay: '1.44s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-100%' }
                            }}>
                            <div className="underlint__box">
                                <div className='underline__'></div>
                            </div>
                            <div className="title">
                                <h2>
                                    Ne habeo malis vituperatoribus
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="showcase__text" transition={{ type: 'spring', stiffness: 300, duration: '1.8s', delay: '1.8s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-100%' }
                            }}>
                            <div className="underlint__box">
                                <div className='underline__'></div>
                            </div>
                            <div className="title">
                                <h2>
                                    Vel laudem suscipit democritum
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="showcase__text" transition={{ type: 'spring', stiffness: 300, duration: '2s', delay: '2.2s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '-100%' }
                            }}>
                            <div className="underlint__box">
                                <div className='underline__'></div>
                            </div>
                            <div className="title">
                                <h2>
                                    Dicit fabellas periculis at vix
                                </h2>
                            </div>
                        </motion.div>



                    </div>


                </div>
            </Container>
        </section>
    );
}



export default WhyChoseUs
