//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!!
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function PartnerList(props) {
    if (Object.keys(props).length === 0) {
        return;
    }
    const list = css`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        padding: 0;
        row-gap: 2rem;
        @media screen and (min-width: 48rem) {
            column-gap: 2em;
            flex-direction: row;
        }`
    const item = css`
        display: block;
        height: 1.375rem;
        maxWidth: 100%;
        @media screen and (min-width: 48rem) {
            height: 2rem;
        }`

    return (
        <>
        <ul css = {list}>
            {props.list.map((partner, i) => {
                return (
                    <li key = {i}>
                        <img src = {process.env.PUBLIC_URL + 'img/' + partner} alt = {partner} css = {item}/>
                    </li>)
            })}
        </ul>
        </>
    );
}