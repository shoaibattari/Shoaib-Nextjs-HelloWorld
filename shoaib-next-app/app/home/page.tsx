'use client'
import styles from '..//page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>THIS PAGE IS HOME COMPONENTS</h1>
      <button type="button" className="btn" onClick={() => router.push('./')}>
        Go To Main Page
      </button>

      <button type="button" onClick={() => router.push('./home')}>
        Go To Home Page
      </button>

      <button type="button" onClick={() => router.push('./home/about')}>
        Go To About Page
      </button>

      <button type="button" onClick={() => router.push('./home/contactUs')}>
        Go To Contact Us Page
      </button>
      </main>
    )
}
