import styles from './Time.module.css'

import clock from '../img/icon-clock.svg'

function Timer({timeLeft}) {
    return (
        <div className={styles.time}>
            <img src={clock} alt='Clock' />
            <div>{timeLeft} days left</div>
        </div>
    )
    
    
}
export default Timer