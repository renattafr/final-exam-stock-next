import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutPage() {
  return (
    <>
    <center><Head>
      <title>About Page</title>
    </Head>
    <Navbar/>
    <h1>This is the final exam website</h1>
    <p>
      By Renatta Fernandez.
    </p>
    <Link href="/">Home</Link></center>

    </>
  )
}