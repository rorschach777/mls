import Image from 'next/image'
import styles from './page.module.css'
import Wildflowers from '../components/Wildflowers';
import Guestbook from '../components/Guestbook';
import InstaPhoto from '../components/InstaPhoto.tsx';
import Menu from '../components/Menu.tsx';
import Header from '../components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
   <Head>
        <link rel="stylesheet" href="https://use.typekit.net/sza1dmj.css" />
    </Head>
    <main className={styles.main}>
      {/* <div className="centered-message">
        <span>Marissa Leigh Sweitzer</span>
        <span>Under Construction</span>
      </div> */}
      <Header/>
      <Wildflowers/>
      {/* <Guestbook/> */}
      <InstaPhoto/>
    </main>
    </>

  )
}
