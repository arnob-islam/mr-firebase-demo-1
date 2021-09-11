import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            className='section_wrapper'
            animate={controls}
            initial="hidden"
            transition={{ type: 'spring', stiffness: 700 }}
            variants={{
                visible: { y: '0' },
                hidden: { y: '-50%' }
            }}
        >
            {children}
        </motion.div>
    );
}


function SectionTitle({ title }) {
    return (
        <div className="App">

            <FadeInWhenVisible>
                <div
                    className='section-tittle'>
                    <h2>
                        {title}
                    </h2>

                </div>
            </FadeInWhenVisible>

        </div>
    );
}
export default SectionTitle