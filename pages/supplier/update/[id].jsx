import Head from "next/head"
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");


  const updateSupplier = async (data) => {
    const response = await fetch(`/api/supplier/${supplier._id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // serialisation
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const result = await response.json();   // deserialise
    if (result.error) {
      alert("Error: " + result.error)
    } else {
      alert("Suppliers updated")
      window.location.href = "/supplier"
    }
    console.log(result)
    setData(JSON.stringify(data))
  }

  console.log('Supplier 2', supplier)
  if (!supplier) return (
    <div>
      <p>Supplier not found</p>
      <Link href="/supplier">Back</Link>
    </div>
  );

  return (
    <>
      <Head>
        <title>Update {supplier.name}</title>
      </Head>
      <div class="container mt5">
<div class="card container mt5" style={{width: '30rem', justifyContent: 'center'}}>
      <div className="form-wrapper" style={{ margin: '1rem' }}>
                <form onSubmit={handleSubmit(updateSupplier)}>
                    <div className="form-group">
                    <div class="container mt-3">
                        <label htmlFor="name">Name</label><br />
                        <input id="name" {...register("name", { required: true })} className="form-control" placeholder={supplier.name} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div class="container mt-3">
                        <label htmlFor="address">Address</label><br />
                        <textarea id="address" {...register("address", { required: true })} className="form-control" placeholder={supplier.address} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div class="container mt-3">
                        <label htmlFor="phoneNumber">Phone Number</label><br />
                        <input id="phoneNumber" type="tel" {...register("phoneNumber", { required: true })} className="form-control" placeholder={supplier.phoneNumber} />
                    </div>
                    </div>
                    <div className="button-group">
                    <div class="container mt-3">
                        <button style={{marginRight:'50px'}} type="submit" className="btn btn-primary">Submit</button>
                        <Link href="/supplier" className="btn btn-primary">Back</Link>
                    </div>
                    </div>
                </form>
            </div>
            </div>
            </div>
            </>
  )
}
// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/supplier/${params.id}`)
  const supplier = await res.json()
  console.debug('Supplier 1', supplier)
  return { props: { supplier } }
}
