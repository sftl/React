//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!!
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Header(props) {
    if (Object.keys(props).length === 0) {
        return;
    }
    const container = css`
        align-items: center;
        display: flex;
        justify-content: space-between;`
    const button = css`
        background-color: #000;
        border-radius: 50px;
        color: #fff;
        font-weight: bold;
        padding: .5rem .75rem;
        text-decoration: none;`

    return (
        <>
        <div css = {container}>
            <img alt = {props.logo.alt || ''} src = {process.env.PUBLIC_URL + 'img/' + props.logo.src}/>
            <a href = {props.button.href} css = {button}>{props.button.text}</a>
        </div>
        </>
    );
}