//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!! and avoid the awrning: 'You have tried to stringify object
//returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but
//rather handed to emotion so it can handle it (e.g. as value of `css` prop).'
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

export default function Media(props) {
    if (Object.keys(props).length === 0) {
        return
    }
    const container = css`
        align-items: center;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(1, 1fr);

        /*768px*/
        @media screen and (min-width: 48rem) {
            grid-template-columns: repeat(2, 1fr);
        }`
    const content = css`
        grid-column: 1;
        grid-row: 1;

        /*768px*/
        @media screen and (min-width: 48rem) {
            grid-column: ${props.reverse ? 1 : 2};
        }`
    const image = css`
        display: block;
        grid-column: 1;
        grid-row: 2;
        height: auto;
        max-width: 100%;

        /*768px*/
        @media screen and (min-width: 48rem) {
            grid-column: ${props.reverse ? 2 : 1};
            grid-row: 1;
        }`
    const item = css`
        background: transparent url(${process.env.PUBLIC_URL + 'img/check.svg'}) no-repeat left center;
        backgroundsize: 1.25rem;
        padding-left: 2rem;`
    const list = css`
        display: flex;
        flex-direction: column;
        list-style: none;
        row-gap: 0.75rem;`
    const title = css`
        color: #353535;
        font-size: 1.5625rem;
        font-weight: bold;
        margin-bottom: 0.75rem;`

    return (
        <div css={container}>
            <img alt={props.img} src={process.env.PUBLIC_URL + 'img/' + props.img} css={image} />
            <div css={content}>
                <h3 css={title}>{props.title}</h3>
                <p css={css`margin-bottom: 1.125rem;`}>{props.content}</p>
                <ul css={list}>
                    {props.bulletpoints.map((point, i) => (
                        <li key={i} css={item}>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
