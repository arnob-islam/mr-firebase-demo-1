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
        <section className='about_sector'>
            <Container>
                <div className="wrapper" ref={ref}>
                    <div className="branding">
                        <div className="branding_text">

                            <motion.h2 animate={controls} initial="hidden"
                                className="img_container mb-4" transition={{ type: 'spring', stiffness: 300, duration: '1s' }} variants={{
                                    visible: { x: '0' },
                                    hidden: { x: '-50%' }
                                }}>
                                Custom your <br />
                                Web application
                            </motion.h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>

                        </div>
                    </div>
                    <div className="branding_img">
                        <motion.div animate={controls} initial="hidden" style={{ transition: '.5s' }}
                            className="img_container" variants={{ visible: { scale: '1' }, hidden: { scale: '0' } }}>
                            <img src="/img/img-4.svg" alt="svg" />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}


// const AboutUs = () => {

//     const { scrollYProgress } = useViewportScroll()
//     const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1])

//     return (
//         <section className='about_sector'>
//             <Container>
//                 <div className="wrapper">
//                     <div className="branding">
//                         <FadeInWhenVisible
//                             style={{ scaleX: scale }} className="branding_text">
//                             <h2>Custom your</h2>
//                             <h3>Web application</h3>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//                             </p>

//                         </FadeInWhenVisible>
//                     </div>
//                     <div className="branding_img">
//                         <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} className="img_container">
//                             <img src="/img/img-4.svg" alt="svg" />
//                         </motion.div>
//                     </div>
//                 </div>
//             </Container>
//         </section>
//     )

// }

export default AboutUs
