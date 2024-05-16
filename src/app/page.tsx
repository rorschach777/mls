import Image from 'next/image'
import styles from './page.module.css'
import Wildflowers from '../components/Wildflowers';
import Guestbook from '../components/Guestbook';
import InstaPhoto from '../components/InstaPhoto.tsx';
import Header from '../components/Header';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className="centered-message">
        <span>Marissa Leigh Sweitzer</span>
        <span>Under Construction</span>
      </div> */}
      <Header/>
      <Wildflowers/>
      <Guestbook/>
      <InstaPhoto/>
    </main>
  )
}
