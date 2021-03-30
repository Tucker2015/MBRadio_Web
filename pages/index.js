import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import NavBar from '../components/NavBar'


const Home = (prop) => {
  return (

    <div className={styles.container}>
      <Head>
        <title>Military Broadcast Radio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Military Broadcast Radio
        </h1>
        <h3 className={styles.quote}>" GIVING VETERANS
A VOICE "</h3>
        <Image
          src="/images/mbr.png"
          alt="Picture of the author"
          width={500}
          height={500}
          objectFit="contain"
        />
      </main>


    </div>

  )
}
export default Home