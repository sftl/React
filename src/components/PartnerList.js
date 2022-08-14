//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!! and avoid the awrning: 'You have tried to stringify object
//returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but
//rather handed to emotion so it can handle it (e.g. as value of `css` prop).'
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

export default function PartnerList(props) {
    if (Object.keys(props).length === 0) {
        return
    }
    const item = css`
        display: block;
        height: 1.5rem;
        max-width: 100%;
        @media screen and (min-width: 75rem) {
          height: 2rem;
        }`
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
        }
        @media screen and (min-width: 75rem) {
          column-gap: 4em;
        }`

    return (
        <ul css={list}>
            {props.list.map((partner, i) => {
                return (
                    <li key={i}>
                        <img src={process.env.PUBLIC_URL + 'img/' + partner} alt={partner} css={item} />
                    </li>
                )
            })}
        </ul>
    )
}
