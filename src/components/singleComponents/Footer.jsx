import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';


const Footer = () => {
    return (
        <footer className='site_footer'>
            <Container>
                <div className="wrapper">
                    <div className="img_container">
                        <img src="/img/slack.png" alt="logo" />
                        <span>
                            mr demo
                        </span>
                    </div>
                    <div className="page_links">
                        <Link to='/about/us/'>about us</Link>
                        <Link to='/blogs/'>blogs</Link>
                        <Link to='/services/'>service</Link>
                    </div>
                    <div className="copy_write">
                        <span>
                            © 2021 MR DEMO IS PROUDLY POWERED BY <a href="https://preview-shop.netlify.app/"> <i>Mr Lighthouse</i> </a>
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer