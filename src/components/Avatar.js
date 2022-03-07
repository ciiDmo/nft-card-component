import styles from './Avatar.module.css'

function Avatar({picSrc, name}) {
    return (
        <div className={styles.person}>
                <img src={picSrc} alt='Avatar' />
                <span 
                    className={styles.personTxt}>
                        Creation of
                    <span 
                        className={styles.personName}>
                            {name}
                    </span>
                </span>
        </div>
    )
}
export default Avatar