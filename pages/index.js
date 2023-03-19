import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page suppliers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div class="container mt-5 text-center fw-bold">
        <h1>Supplier Management Website - Final Exam</h1>
      </div>
      <div class="container mt-4 text-center fs-2">
        <p>By Renatta Fernandez - 6338017</p>
      </div>
      <div class="container mt-5 text-center">
      <img src="/images/suppliers_pict.png" class="img-fluid" width="300" alt="..." ></img>
      </div>
    </>
  );
}
