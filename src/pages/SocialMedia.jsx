import React from 'react'
import Container from '@material-ui/core/Container';

const MediaPhoto = [
    {
        name: 'facebook',
        solid: '/img/facebook.png',
        gif: '/img/facebook.gif'
    },
    {
        name: 'pinterest',
        solid: '/img/pinterest.png',
        gif: '/img/pinterest.gif'
    },
    {
        name: 'twitter',
        solid: '/img/twitter.png',
        gif: '/img/twitter.gif'
    },
    {
        name: 'skype',
        solid: '/img/skype.png',
        gif: '/img/skype.gif'
    },
    {
        name: 'snapchat',
        solid: '/img/snapchat.png',
        gif: '/img/snapchat.gif'
    },
    {
        name: 'whatsapp',
        solid: '/img/whatsapp.png',
        gif: '/img/whatsapp.gif'
    },

]

const SocialMedia = () => {

    const SetGif = (e, name) => {
        return MediaPhoto.filter(photo => {
            if (photo.name === name) {
                return e.target.src = photo.gif
            } else {
                return null
            }

        })

    }
    const RemoveGif = (e, name) => {
        return MediaPhoto.filter(photo => {
            if (photo.name === name) {
                return e.target.src = photo.solid
            }
            else {
                return null
            }

        })

    }

    return (
        <section className='social_media_sector'>
            <Container>
                <div className="wrapper">
                    {MediaPhoto.map(a => {
                        return <div className="single_box" key={a.name}>
                            <div className="img_wrapper">
                                <img src={a.solid} alt={a.name} className='img_gif' onMouseOver={(e) => SetGif(e, a.name)} onMouseLeave={(e) => RemoveGif(e, a.name)} />
                            </div>
                        </div>
                    })}
                </div>
            </Container>
        </section>
    )
}

export default SocialMedia
