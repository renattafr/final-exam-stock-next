import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";




// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function AddSupplierPage() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

 

  const saveSupplier = async (data) => {
    const response = await fetch(`/api/supplier`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
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
      alert("Supplier saved")
      window.location.href = "/supplier"
    }
    console.log(result)
    setData(JSON.stringify(data))
  }

  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>New Supplier</title>
    </Head>
    <div class="container mt5">
    <div class="card container mt5" style={{width: '30rem', justifyContent: 'center', paddingBottom:'20px'}}>
        <div class="container mt-4" className="form-wrapper">
            <form onSubmit={handleSubmit(saveSupplier)}>
                <div className="form-group">
                <div class="container mt-3">
                    <label htmlFor="name">Name</label><br />
                    <input id="name" {...register("name", { required: true })} className="form-control" placeholder="Name" />
                    </div>
                    
                </div>
                <div className="form-group">
                <div class="container mt-3">
                    <label htmlFor="address">Address</label><br />
                    <textarea id="address" {...register("address", { required: true })} className="form-control" placeholder="Address" />
                </div>
                </div>
                <div className="form-group">
                <div class="container mt-3">
                    <label htmlFor="phoneNumber">Phone Number</label><br />
                    <input id="phoneNumber" type="tel" {...register("phoneNumber", { required: true })} className="form-control" placeholder="Phone Number" />
                </div>
                </div>
                <div className="button-group">
                <div class="container mt-3">
                <div class="col-auto">
                    <button style={{marginRight:'50px'}} type="submit" className="btn btn-primary">Submit</button>
                    <Link href="/supplier" className="btn btn-primary">Back</Link>
                </div>
                </div>
                </div>
            </form>
        </div>
        </div>
        </div>
    </>
);
}