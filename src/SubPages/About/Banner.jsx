import React from 'react'
import Container from '@material-ui/core/Container';


const Banner = () => {
    return (
        <section className='bg-fixed off__' style={{ background: `url(/img/bg-3.jpg)` }}>
            <Container>
                <div className="wrapper">
                    <div className="text-branding">
                        <h1>
                            Iriure oportere definitionem mea ei, ponderum prodesset vel no.
                            <br />
                            Mei adhuc justo altera id, omnis ubique pro
                        </h1>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner
