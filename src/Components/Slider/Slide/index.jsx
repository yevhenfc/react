import React from 'react'
import styles from './Slide.module.scss '

export default function Slide (props) {
    const {images, currentImgId} = props;
    return (
    <div>{images[currentImgId]}</div>
  )
}
