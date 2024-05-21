
import Image from 'next/image'
import styles from './page.module.css'
import Wildflowers from '../components/Wildflowers';
import Guestbook from '../components/Guestbook';
import InstaPhoto from '../components/InstaPhoto';
import Menu from '../components/Menu';
import BlogEntry from '@/components/BlogEntry';
import Header from '../components/Header';
import Playlist from '../components/Playlist';
import Head from 'next/head';
import Quote from '../components/Quote';
import { useEffect } from 'react';
import QuoteCarousel from '../components/QuoteCarousel';

export default function Home() {

  return (  
    <>
    <Head>
        <link rel="stylesheet" href="https://use.typekit.net/sza1dmj.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"/>
    </Head>
    <main className={styles.main}>
      <Header/>
      <Wildflowers/>
      <QuoteCarousel/>
      <Guestbook/>
  
      {/* <BlogEntry/>
      <InstaPhoto/> */}
      {/* <Playlist/> */}
    </main>
    </>

  )
}
