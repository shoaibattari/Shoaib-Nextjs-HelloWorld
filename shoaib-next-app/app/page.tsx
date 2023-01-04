
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <main className={styles.main}>
<h1>HELLO WORLD FROM SHOAIB MEMON MY FIRST APP FOR NEXT.JS</h1>
<p>-----------------------------------------------------------------------</p>
<p>this is main page</p>
<br />
<p>-----------------------------------------------------------------------</p>

<Link href="/home">Go To Home Page</Link>
<br />
<Link href="/home/about">Go To About Page</Link>
<br />
<Link href="/home/contactUs">Go To Contact Us Page</Link>
<p>-----------------------------------------------------------------------</p>


</main></>)
}
