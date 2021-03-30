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
        <div className="mx-auto">
          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
          </p>
          <div class="row">
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body">
                  Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
              </div>
            </div>
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <div class="card card-body">
                  Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>

  )
}
export default Home