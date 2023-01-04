'use client';

import { useRouter } from 'next/navigation';


import styles from '/app/page.module.css'

export default function ConatctUs() {
  const router = useRouter();

  return (
      <main className={styles.main}>
  <h1>this page is Contact Us component</h1>

  
  <button type="button" onClick={()=> router.push('./')}>
    Go To Main Page
  </button>
  <br/>

  <button type="button" onClick={()=> router.push('./home')}>
    Go To Home Page
  </button>
  <br/>

<button type="button" onClick={()=> router.push('./home/about')}>
  Go To About Page
</button>
  
  
  
  
  



  </main>)
  }
