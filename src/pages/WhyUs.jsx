import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import Container from '@material-ui/core/Container';
import { useInView } from "react-intersection-observer";


function AboutUs() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <section className='why_chose_us border-top-1' >
            <Container>
                <div className="wrapper" >

                    <div className="branding_img" ref={ref}>
                        <motion.div animate={controls} initial="hidden" style={{ transition: '.5s' }}
                            className="img_container" variants={{ visible: { y: '0' }, hidden: { y: '20%' } }}>
                            <img src="/img/img-5.svg" alt="svg" />
                        </motion.div>
                    </div>


                    <div className="branding_text_wrapper" style={{ overflow: 'hidden' }}>
                        <motion.div animate={controls} initial="hidden"
                            className="text__" transition={{ type: 'spring', stiffness: 300, duration: '1s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '50%' }
                            }}>
                            <div className="icon_">
                                <i className="far fa-check-circle"></i>
                            </div>
                            <div className="title">
                                <h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="text__" transition={{ type: 'spring', stiffness: 300, duration: '1s', delay: '.5s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '50%' }
                            }}>
                            <div className="icon_">
                                <i className="far fa-check-circle"></i>
                            </div>
                            <div className="title">
                                <h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="text__" transition={{ type: 'spring', stiffness: 300, duration: '1s', delay: '.8s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '50%' }
                            }}>
                            <div className="icon_">
                                <i className="far fa-check-circle"></i>
                            </div>
                            <div className="title">
                                <h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="text__" transition={{ type: 'spring', stiffness: 300, duration: '1.2s', delay: '1s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '50%' }
                            }}>
                            <div className="icon_">
                                <i className="far fa-check-circle"></i>
                            </div>
                            <div className="title">
                                <h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div animate={controls} initial="hidden"
                            className="text__" transition={{ type: 'spring', stiffness: 300, duration: '1.5s', delay: '1.5s' }} variants={{
                                visible: { x: '0' },
                                hidden: { x: '50%' }
                            }}>
                            <div className="icon_">
                                <i className="far fa-check-circle"></i>
                            </div>
                            <div className="title">
                                <h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
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
