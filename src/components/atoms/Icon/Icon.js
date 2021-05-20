import React from 'react';
import './Icon.scss';
export default function Image({source, height, width, alt, reqclass}){
    return <img src={source} alt={alt} className={`${reqclass} `} height={height} width={width} />
}