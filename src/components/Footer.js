//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!! and avoid the awrning: 'You have tried to stringify object
//returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but
//rather handed to emotion so it can handle it (e.g. as value of `css` prop).'
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

export default function Footer(props) {
    if (Object.keys(props).length === 0) {
        return
    }
    const color = '#aeaeae'
    const container = css`
        align-items: center;
        color: ${color};
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        row-gap: 1rem;
        @media screen and (min-width: 48rem) {
            flex-direction: row;
            justify-content: space-between;
        }`
    const nav = css`
        column-gap: 1rem;
        display: flex;`
    const anchor = css`
        color: ${color};
        text-decoration: none;`

    return (
        <div css={container}>
            <p>
                <small>{props.left}</small>
            </p>
            <nav css={nav}>
                {props.center.map((item, i) => (
                    <a key={i} href={item.href} css={anchor}>
                        <small>{item.text}</small>
                    </a>
                ))}
            </nav>
            <nav css={nav}>
                {props.right.map((item, i) => (
                    <a key={i} href={item.href} css={anchor}>
                        {item.text}
                    </a>
                ))}
            </nav>
        </div>
    )
}
