//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!! and avoid the awrning: 'You have tried to stringify object
//returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but
//rather handed to emotion so it can handle it (e.g. as value of `css` prop).'
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

export default function Header(props) {
    if (Object.keys(props).length === 0) {
        return
    }
    const container = css`
        align-items: center;
        display: flex;
        justify-content: space-between;`
    const button = css`
        background-color: #353535;
        border-radius: 50px;
        color: #fff;
        font-weight: bold;
        padding: 0.25rem 0.75rem;
        text-decoration: none;`

    return (
        <div css={container}>
            <img alt={props.logo.alt || ''} src={process.env.PUBLIC_URL + 'img/' + props.logo.src} />
            <a href={props.button.href} css={button}>
                {props.button.text}
            </a>
        </div>
    )
}
