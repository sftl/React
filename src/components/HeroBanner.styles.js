//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!! and avoid the awrning: 'You have tried to stringify object
//returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but
//rather handed to emotion so it can handle it (e.g. as value of `css` prop).'
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

//Keep styles object keys ordered alphabetically to easy look and find, also to avoid duplicated
const styles = {
    anchor: css`
        background-color: #353535;
        border-radius: 5rem;
        color: #fff;
        display: inline-block;
        font-weight: bold;
        margin-bottom: 0.75rem;
        padding: 0.7rem 0.8rem;
        text-decoration: none;`,
    banner: css`
        display: block;
        height: auto;
        margin: 2rem auto 0 auto;
        max-width: 100%;`,
    body: css`
        @media screen and (min-width: 64rem) {
            margin: 0 auto;
            width: 50%;
        }`,
    subtitle: css`
        color: #aeaeae;
        display: block;
        font-size: 0.8rem;
        margin: 0 auto;`,
    title: css`
        color: #353535;
        font-size: 2.2rem;
        font-weight: bold;
        line-height: 1.2;
        margin-bottom: 0.75rem;
        @media screen and (min-width: 75rem) {
            margin-bottom: 1rem;
        }`,
}

export default styles
