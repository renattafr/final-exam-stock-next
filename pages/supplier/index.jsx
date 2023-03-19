import Navbar from "@/components/navBar";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home({ suppliers }) {
  function deleteSupplier(id) {
    fetch(`/api/supplier/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        window.location.reload(false);
      });
  }

  return (
    <>
      <Head>
        <title>Suppliers</title>
      </Head>
      <Navbar/>
      <div class="container mt-5">
        <div class="row align-items-start">
          <div class="col">
            <h1>Suppliers Information</h1>
          </div>
          <div class="col align-items-center" >
            
            <Link type="button" href="/supplier/add" class="btn btn-primary">
              Add Supplier
            </Link>
            
          </div>
        </div>
      </div>
      <table class="table table-striped table-hover " style={{marginTop:'30px'}}>
        <thead>
          <tr class="table-primary">
            <th >Name</th>
            <th >Address</th>
            <th >Phone Number</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => {
            return (
              <tr key={supplier._id}>
                <td scope="row">
                  <Link
                     href={`/supplier/${supplier._id}`}
                  >
                    {supplier.name}
                  </Link>
                </td>
                <td>{supplier.address}</td>
                <td>{supplier.phoneNumber}</td>
                <td>
                <Link type="button" href={`/supplier/update/${supplier._id}`} class="btn btn-primary">
              Update
            </Link>
                  
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteSupplier(supplier._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/supplier/`)
  const suppliers = await res.json()
  console.log(suppliers)
  return { props: { suppliers } }
}
