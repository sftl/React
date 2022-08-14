//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!! and avoid the awrning: 'You have tried to stringify object
//returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but
//rather handed to emotion so it can handle it (e.g. as value of `css` prop).'
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */

import {Component} from 'react'
import data from './Align.data'
import styles from './Align.styles'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import Media from '../components/Media'
import PartnerList from '../components/PartnerList'
import Team from '../components/Team'

export default class Align extends Component {
    render() {
        return (
            <>
                <header className='Container Pad'>
                    <Header {...data.header} />
                </header>
                <main>
                    <section className='Container PadH' css={styles.section}>
                        <HeroBanner {...data.heroBanner1} />
                    </section>
                    <section className='Container PadH'>
                        <PartnerList {...data.parentList} />
                    </section>
                    <section className='Container PadH' css={styles.section}>
                        <div css={styles.mediaContainer}>
                            {data.media.map((media, i) => (
                                <Media {...media} key={i} />
                            ))}
                        </div>
                    </section>
                    <section className='PadH' css={[styles.section, styles.team]}>
                        <div className='Container'>
                            <Team {...data.team} />
                        </div>
                    </section>
                    <section className='PadH' css={styles.heroBanner2}>
                        <div className='Container'>
                            <HeroBanner {...data.heroBanner2} />
                        </div>
                    </section>
                </main>
                <footer className='Container >PadH' css={styles.footer}>
                    <Footer {...data.footer} />
                </footer>
            </>
        )
    }
}
