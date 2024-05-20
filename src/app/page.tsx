'use client'
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

  useEffect(() => {
    document.title = "Marissa Leigh Sweitzer | In Loving Memory ";
  }, []);
  return (  
    <>
    <Head>
       <title>{document.title}</title>
        <link rel="stylesheet" href="https://use.typekit.net/sza1dmj.css" />
    </Head>
    <main className={styles.main}>
      {/* <div className="centered-message">
        <span>Marissa Leigh Sweitzer</span>
        <span>Under Construction</span>
      </div> */}
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
