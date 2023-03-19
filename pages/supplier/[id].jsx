import Head from "next/head"
import Link from "next/link"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
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
                <title>{supplier.name}</title>
            </Head>
            <div className="detail-card">
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{supplier.name}</h5>
                        <p className="card-text">{supplier.address}</p>
                        <p className="card-text">{supplier.phoneNumber}</p>
                        
                    </div>
                    <div className="card-footer back-button">
                        <Link href="/supplier" className="no-text-decoration">Back</Link>
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