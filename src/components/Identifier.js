import styles from './Identifier.module.css'

function Identifier({code}) {
    return (
        <div>
            <div className={styles.id}>Equilibrium #{code}</div>
        </div>
    )
}
export default Identifier