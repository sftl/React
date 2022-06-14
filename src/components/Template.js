import React from 'react';

//3 methods to add CSS to components, all three requires react-scripts
//Adding regular css stylesheet
import './Template.css'

//Adding module css stylesheet
import style from './Template.module.css'

//Adding SASS stylesheet
import './Template.scss'

export default function Template() {
    return (
        <>
        <div className="Template">Template component with regular CSS</div>
        <div className={style.Template}>Template component with module CSS</div>
        <div className="TemplateSass">Template component with module SCSS</div>
        </>
    );
}