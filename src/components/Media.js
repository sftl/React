//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!!
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Media(props) {
    if (Object.keys(props).length === 0) {
        return;
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
        //grid-column: props.reverse ? 1 : 2;
        grid-column: 1;
        grid-row: 1;
        /*768px*/
        @media screen and (min-width: 48rem) {
            grid-column: ${props.reverse ? 1 : 2};
        }
        `
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
    const list = css`
        display: flex;
        flex-direction: column;
        list-style: none;
        row-gap: 0.75rem;`
    const item = css`
        background: transparent url(${process.env.PUBLIC_URL + 'img/check.svg'}) no-repeat left center;
        backgroundSize: 1.25rem;
        padding-left: 2rem;`

    return (
        <>
        <div css = {container}>
            <img alt = {props.img} src = {process.env.PUBLIC_URL + 'img/' + props.img} css = {image}/>
            <div css = {content}>
                <h3 css = {css`font-size: 1.5625rem; margin-bottom: 0.75rem; color: #353535`}>{props.title}</h3>
                <p css = {css`margin-bottom: 1.125rem;`}>{props.content}</p>
                <ul css = {list}>
                    {props.bulletpoints.map((point, i) => <li key = {i} css = {item}>{point}</li>)}
                </ul>
            </div>
        </div>
        </>
    );
}