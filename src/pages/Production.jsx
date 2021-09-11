import React from 'react'
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import AllInboxOutlinedIcon from '@material-ui/icons/AllInboxOutlined';
import FilterHdrOutlinedIcon from '@material-ui/icons/FilterHdrOutlined';
import VerticalSplitOutlinedIcon from '@material-ui/icons/VerticalSplitOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import Container from '@material-ui/core/Container';



const AboutUs = () => {
    return (
        <section className='production__sector border-top-1'>
            <Container>
                <div className="wrapper">
                    <div className="production_branding">
                        <div className="img_container">
                            <img src="/img/img-6.svg" alt="..." className='img-fluid' />
                        </div>
                    </div>
                    <div className="production_boxes_wrapper">
                        <div className="production__box">
                            <div className="svg_container">
                                <AccountTreeOutlinedIcon />
                            </div>
                            <div className="content">
                                <div className="head_branding">
                                    <h4>Lorem ipsum dolor sit ame</h4>
                                </div>
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam eveniet voluptates nesciunt consequatur nam!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="production__box">
                            <div className="svg_container">
                                <AllInboxOutlinedIcon />
                            </div>
                            <div className="content">
                                <div className="head_branding">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                </div>
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam eveniet voluptates nesciunt consequatur nam!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="production__box">
                            <div className="svg_container">
                                <FilterHdrOutlinedIcon />
                            </div>
                            <div className="content">
                                <div className="head_branding">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                </div>
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam eveniet voluptates nesciunt consequatur nam!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="production__box">
                            <div className="svg_container">
                                <VerticalSplitOutlinedIcon />
                            </div>
                            <div className="content">
                                <div className="head_branding">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                </div>
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam eveniet voluptates nesciunt consequatur nam!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="production__box">
                            <div className="svg_container">
                                <BarChartOutlinedIcon />
                            </div>
                            <div className="content">
                                <div className="head_branding">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                </div>
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam eveniet voluptates nesciunt consequatur nam!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutUs
