import React, {useState} from 'react'
import styles from './Controller.module.scss'
import PropTypes from 'prop-types';

export default function Controller(props) {
    const {setPrevSlide, setNextSlide} = props;
    const [isRunning, setIsRunning] = useState(false);
    const [slideShowId, setSlideShowId] = useState(null);
    const [delay, setDelay]         = useState(1000);

    const start = () => {
      if(!isRunning)  {setIsRunning(true); 
                       setSlideShowId(setInterval(setNextSlide, delay))
                      }
    }
    
    const stop = () => {
        if(isRunning)  {setIsRunning(false); 
                         clearInterval(slideShowId)
                        }
      }
    
    const delayHandler = (e) => {setDelay(e.target.value);}  
    
    return (
    <div className='styles.container'>
        <div className='styles.navigation'>
            <button onClick={setPrevSlide}>{'<'}</button>
            <button onClick={setPrevSlide}>{'>'}</button>
        </div>
        <div className={styles.workedContainer}>
            <p>Slideshow</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <p>delay {delay}</p>
            <input name ='delay' type ="range" 
                   min={500} max={3000} step={100} 
                   value={delay} onChange={delayHandler}/>
        </div>
    </div>
  )
}

Controller.PropTypes ={
    setPrevSlide: PropTypes.func.isRequired, 
    setNextSlide: PropTypes.func.isRequired,
}