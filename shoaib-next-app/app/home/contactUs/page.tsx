'use client';

import { useRouter } from 'next/navigation';


import styles from '/app/page.module.css'

export default function ConatctUs() {
  const router = useRouter();

  return (
      <main className={styles.main}>
  <h2>THIS PAGE IS CONTACT US COMPONENTS</h2>

  
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
