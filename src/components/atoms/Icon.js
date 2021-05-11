import React from 'react';
export default function Image({source, height, width, alt}){
    const iconstyle = {
    }
    return <img src={source} alt={alt} className={iconstyle} height={height} width={width}/>
}