import React from 'react'

//4 methods to add CSS to components, all three requires react-scripts
//Adding regular css stylesheet
import './Template.css'

//Adding module css stylesheet
import style from './Template.module.css'

//Adding SASS stylesheet
import './Template.scss'

//THE BELOW COMMENT IS REQUIRED TO MAKE emotion/react WORK!!!! and avoid the awrning: 'You have tried to stringify object
//returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but
//rather handed to emotion so it can handle it (e.g. as value of `css` prop).'
//https://www.digitalocean.com/community/tutorials/react-react-emotion
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
const color = 'green'

export default function Template() {
    return (
        <>
            <div className='Template'>Template component with regular CSS</div>
            <div className={style.Template}>Template component with module CSS</div>
            <div className='TemplateSass'>Template component with SCSS</div>
            <div css={css`padding: 10px; background-color: #eee; color: ${color}; margin: 10px;`}>
                Template component with emotion/react using string
            </div>
            <div css={css({margin: 10, padding: 10, backgroundColor: '#eee', color: color})}>
                Template component with emotion/react using object
            </div>
        </>
    )
}
