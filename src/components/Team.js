//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!! and avoid the awrning: 'You have tried to stringify object
//returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but
//rather handed to emotion so it can handle it (e.g. as value of `css` prop).'
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

export default function Team(props) {
    if (Object.keys(props).length === 0) {
        return
    }

    const avatar = css`
        display: inline-block;
        height: 5rem;
        max-width: 100%;
        width: 5rem;`
    const teammember = css`
        flex: 0 0 100%;
        /*768px*/
        @media screen and (min-width: 48rem) {
            flex: 0 0 50%;
        }
        /*1024px*/
        @media screen and (min-width: 64rem) {
            flex: 0 0 ${100 / props.itemsperrow}%;
        }`
    const ul = css`
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        row-gap: 2rem;`

    return (
        <div css={css`text-align: center;`}>
            <h3 css={css`font-size: 1.5625rem; margin-bottom: 0.75rem; color: #353535;`}>{props.name}</h3>
            <p css={css`margin-bottom: 2rem;`}>{props.description}</p>
            <ul css={ul}>
                {props.list.map((member, i) => {
                    return (
                        <li key={i} css={teammember}>
                            <img
                                alt={member.alt || ''}
                                src={process.env.PUBLIC_URL + 'img/' + member.img}
                                css={avatar}
                            />
                            <p css={css`margin: 1rem 0;`}>{member.description}</p>
                            <p css={css`font-weight: bold;`}>{member.name}</p>
                            <small css={css`color: #aeaeae; font-size: 0.8rem;`}>{member.position}</small>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
