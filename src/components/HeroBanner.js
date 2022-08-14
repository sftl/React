//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!! and avoid the awrning: 'You have tried to stringify object
//returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but
//rather handed to emotion so it can handle it (e.g. as value of `css` prop).'
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import styles from './HeroBanner.styles'

export default function HeroBanner(props) {
    if (Object.keys(props).length === 0) {
        return
    }

    return (
        <div css={css`text-align: center;`}>
            <div css={styles.body}>
                <h3 css={styles.title}>{props.title}</h3>
                <p css={css`margin-bottom: 1.25rem;`}>{props.content}</p>
                <a href={props.actionhref} target='_blank' rel='noreferrer' css={styles.anchor}>
                    {props.actiontext}
                </a>
                {props.subtitle && <p css={styles.subtitle}>{props.subtitle}</p>}
            </div>
            {props.banner && (
                <img alt={props.banner} src={process.env.PUBLIC_URL + 'img/' + props.banner} css={styles.banner} />
            )}
        </div>
    )
}
