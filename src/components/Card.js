/*import {useState} from 'react'*/

import styles from './Card.module.css'

import cube from '../img/image-equilibrium.jpg'
import programmer from '../img/programmer.jpg'
import eye from '../img/icon-view.svg'

import Identifier from './Identifier'
import Cash from './Cash'
import Timer from './Time'
import Avatar from './Avatar'

function Card() {

    return (
        <div className={styles.card} >
            <div className={styles.cube}>
                <img src={cube} alt='Equilibrium'/>
                <div className={styles.under}>
                    <img src={eye} alt='View' className={styles.viewer} />
                </div>
            </div>
            <Identifier code={3429} />
            <p className={styles.txt}>
                Our Equilibrium collection promotes balance and calm.
            </p>
            <div className={styles.moneyTime}>
                <Cash cash={0.041} />
                <Timer timeLeft={3} />
            </div>
            <hr size="1" className={styles.line}/>
            <Avatar picSrc={programmer} name={'Cidmar Oliveira'} />
        </div>
    )


}
export default Card