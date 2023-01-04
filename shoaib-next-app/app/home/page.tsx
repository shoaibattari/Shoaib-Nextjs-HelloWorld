'use client'
import styles from '..//page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
      <main className={styles.main}>
  <h1>this page is home component</h1>
  <br/>
  <button type="button" onClick={()=> router.push('./')}>
    Go To Main Page
  </button>

  <br/>
  <button type="button" onClick={()=> router.push('./home/about')}>
    Go To About Page
  </button>


  <br/>
  <button type="button" onClick={()=> router.push('./home/contactUs')}>
    Go To Conatact Us Page
  </button>

  </main>)
}
