import React from 'react'
import styles from './Home.module.css'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Invoice App</h1>
                <div className={styles.paragraph}>
                   
                    <p>Invoicing application assignment made with MongoDB, Express, React & Nodejs.</p>
                </div>

            </section>
        </div>
    )
}

export default Home
