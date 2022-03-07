import styles from './Container.module.css'

import Card from './Card'

function Container() {
    return (
        <div className={styles.container}>
            <Card />
        </div>
    )
}

export default Container