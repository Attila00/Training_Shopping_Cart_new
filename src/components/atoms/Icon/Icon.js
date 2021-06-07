import React from 'react';
// import styled from 'styled-components';
import './Icon.scss';
export default function Image({source, height, width, alt, reqclass, pictureReqClass}){
    // const Picture = styled.picture`
    //     align-self:center;
    // `;
    return <picture className={`${pictureReqClass}`}><img src={source} alt={alt} className={`${reqclass}`} height={height} width={width} /></picture>
}