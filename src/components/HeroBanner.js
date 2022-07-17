//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!!
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'; //Adding css with emotion/react

export default function HeroBanner(props) {
    if (Object.keys(props).length === 0) {
        return;
    }
    const title = css`
        color: #353535;
        font-size: 1.5625rem;
        line-height: 1.2;
        margin-bottom: 0.75rem;
        @media screen and (min-width: 75rem) {
            margin-bottom: 1rem;
        }`
    const anchor = css`
        background-color: #000;
        border-radius: 5rem;
        color: #fff;
        display: inline-block;
        font-weight: bold;
        margin-bottom: 0.75rem;
        padding: .75rem .75rem;
        text-decoration: none;
        text-decoration: none;`
    const image = css`
        display: block;
        height: auto;
        margin: 2rem auto 0 auto;
        max-width: 100%;`

    return (
        <>
        <div css = {css`text-align: center;`}>
            <div css = {css`
                @media screen and (min-width: 64rem) {
                    margin: 0 auto;
                    width: 50%;
                }`}>
                <h3 css = {title}>{props.title}</h3>
                <p css = {css`margin-bottom: 1.25rem;`}>{props.content}</p>
                <a href = {props.actionhref} target='_blank' rel='noreferrer' css = {anchor}>{props.actiontext}</a>
                <p css = {css`color: #aeaeae; display:block; font-size: 0.8rem; margin: 0 auto; `}>{props.subtitle}</p>
            </div>
            <img alt = {props.banner} src = {process.env.PUBLIC_URL + 'img/' + props.banner} css = {image}/>
        </div>
        </>
    );
}