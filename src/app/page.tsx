import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="centered-message">
        <span>Marissa Leigh Sweitzer</span>
        <span>Under Construction</span>
      </div>
    </main>
  )
}
