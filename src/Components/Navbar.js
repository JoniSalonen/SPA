import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar(){
  return(
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div class="container-fluid">
    <Link className="navbar-brand" href="#">SPA Example</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
   <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
   <Link className="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
   <Link className="nav-link" to="/contactus">Contact Us</Link>
        </li>
        <li class="nav-item">
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}