import React from 'react';
import './Icon.scss';
export default function Image({source, height, width, alt, reqclass, onClickHandler, tabIndex}){
    return <picture><img src={source} alt={alt} className={`${reqclass}`} height={height} width={width} onClick={onClickHandler} tabIndex={tabIndex}/></picture>
}