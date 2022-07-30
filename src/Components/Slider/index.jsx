import React, {useState}  from 'react'
import PropTypes from 'prop-types';
import Controller from './Controller';
import styles from './Slider.module.scss';

export default function Slider(props) {
    const {images} = props;
    const [currnetImgId, setCurrnetImgId] = useState(0);
    const setPrevSlide = () => {currnetImgId === 0                 ? setCurrnetImgId(images.lenght - 1) : setCurrnetImgId(currnetImgId - 1)};
    const setNextSlide = () => {currnetImgId === images.lenght - 1 ? setCurrnetImgId(0)                 : setCurrnetImgId(currnetImgId + 1)};
  
    return (
    <div className={styles.container}>
        <Slide images = {images} currnetImgId = {currnetImgId} />
        <Controller setPrevSlide={setPrevSlide} setNextSlide={setNextSlide} />

    </div>
  )
}

Slider.propTypes = {
    images: PropTypes.array.isRequired;
}