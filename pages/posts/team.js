import NavBar from "../../components/NavBar";
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Team() {
    return (
        <>
            <Head>
                <title>Our Team</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h3 className={styles.quote}>Hello World</h3>
                </main>
                <footer className={styles.footer}>
                    <h3 className={styles.footerText}>© 2021, Military Broadcast Radio</h3>
                </footer>
            </div>
        </>
    )

}