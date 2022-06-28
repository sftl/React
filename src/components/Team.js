//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!!
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Team(props) {
    if (Object.keys(props).length === 0) {
        return;
    }
    const itemsperrow = 100 / props.itemsperrow;
    const ul = css`
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        align-items: center;
        justify-content: center;
        row-gap: 2rem;`

        return (
        <>
        <div css = {css`text-align: center;`}>
            <h3 css = {css`font-size: 1.5625rem; margin-bottom: 0.75rem; color: #353535`}>{props.name}</h3>
            <p css = {css`margin-bottom: 2rem;`}>{props.description}</p>
            <ul css = {ul}>
                {props.list.map((member, i) => {
                    return (
                        <li key = {i}
                            css={css`
                                flex: 0 0 100%;
                                /*768px*/
                                @media screen and (min-width: 48rem) {
                                    flex: 0 0 50%;
                                }
                                @media screen and (min-width: 64rem) {
                                    flex: 0 0 ${100 / props.itemsperrow}%;
                                }`}>
                            <img alt = {member.alt || ''} src = {process.env.PUBLIC_URL + 'img/' + member.img}
                                 css = {css`
                                    display: inline-block;
                                    height: 5rem;
                                    max-width: 100%;
                                    width: 5rem;`}/>
                            <p css = {css`margin: 1rem 0;`}>{member.description}</p>
                            <p css = {css`font-weight: bold;`}>{member.name}</p>
                            <small css = {css`color: #aeaeae; font-size: 0.8rem`}>{member.position}</small>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    );
}