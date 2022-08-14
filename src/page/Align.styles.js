//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!! and avoid the awrning: 'You have tried to stringify object
//returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but
//rather handed to emotion so it can handle it (e.g. as value of `css` prop).'
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

//Keep styles object keys ordered alphabetically to easy look and find, also to avoid duplicated
const styles = {
    footer: css`
        padding-bottom: 3rem;
        padding-top: 3rem;
        @media screen and (min-width: 48rem) {
            padding-bottom: 2rem;
            padding-top: 2rem;
        }
        @media screen and (min-width: 75rem) {
            padding-bottom: 3rem;
            padding-top: 3rem;
        }`,
    heroBanner2: css`
        background-color: #f5f5f5;
        padding-top: 5rem;`,
    mediaContainer: css`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 5rem;`,
    section: css`
        padding-top: 5rem;
        padding-bottom: 5rem;`,
    team: css`background-color: #fafafa;`,
}

export default styles
