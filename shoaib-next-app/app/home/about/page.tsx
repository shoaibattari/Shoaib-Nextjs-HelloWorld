'use client';

import { useRouter } from 'next/navigation';


import styles from '/app/page.module.css'
export default function About() {
const router = useRouter();
  return (
      <main className={styles.main}>
  <h3>THIS PAGE IS ABOUT COMPONENTS</h3>
  
  <button type="button" onClick={()=> router.push('./')}>
    Go To Main Page

  </button>
  <button type="button" onClick={()=> router.push('./home')}>
    Go To Home Page
  </button>

<button type="button" onClick={()=> router.push('./home/about')}>
  Go To About Page
</button>

<button type="button" onClick={()=> router.push('./home/contactUs')}>
  Go To Contact Us Page
</button>
  
  </main>)
  }
