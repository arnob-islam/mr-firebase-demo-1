import React from 'react'

import Container from '@material-ui/core/Container';

import TypeIt from "typeit-react";

const Blog = () => {



    return (
        <section className='blog bg-fixed' style={{ background: `url(/img/bg-2.jpg)` }} >
            <Container>
                <div className="wrapper">
                    <div className="blog_wrapper"  >
                        <div className="blog_typing_text">

                            <h1>
                                <TypeIt
                                    options={{ loop: true }}
                                    getBeforeInit={(instance) => {
                                        instance.type("PHP, GO, SQL, JAVA, PYTHON, C++, C, JAVACKIP").pause(750).delete(4).pause(500).type("SCRIPT !");
                                        return instance;
                                    }}
                                />
                            </h1>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}



export default Blog
