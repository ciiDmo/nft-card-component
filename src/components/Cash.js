import styles from './Cash.module.css'

import eth from '../img/icon-ethereum.svg'

function Cash({cash}) {
    return (
        <div className={styles.money}>
            <img src={eth} alt='Ethereum' />
            <div>{cash} ETH</div>
        </div>
    )
}
export default Cash