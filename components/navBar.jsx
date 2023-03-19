import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg bg-light"
      style={{background: 'linear-gradient(90deg, rgba(14,28,70,1) 37%, rgba(61,128,175,1) 100%)'}}
    >
      <div class="container-fluid mx-5">
        <Link href="/" class="navbar-brand">
          <img src="/images/au.png" width="50" class="logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link href="/" class="nav-link text-white">
              Home
            </Link>
            <Link href="/supplier" class="nav-link text-white">
              Supplier
            </Link>
            <Link href="/about" class="nav-link text-white">
              About
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar