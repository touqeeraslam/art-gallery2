import React,{useEffect} from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const TopNavbar = () => {


  useEffect(() => {
    const handleScroll = () => {
      const topNav = document.querySelector('.top-nav');
      if (topNav) {
        if (window.pageYOffset > 0) {
          topNav.classList.add('scrolled');
        } else {
          topNav.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

  <>

<div className="top-nav m-0 p-0">
<div className="bgImg ms-3 me-3">

 
<nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
    <div className="col-12">
      <div className="row collapse navbar-collapse" id="navbarNav">
        
       <ul class="navbar-nav" >
   

       <div className="col ps-4">
       <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/" style={{color:'white'}}>
          <img  alt=""  width={200}/>
          </Link>
        </li>
       </div>


       <div className="col mt-3 text-center" >
       <li class="nav-item">
          <Link class="nav-link active impression" aria-current="page" to="/" style={{color:'white'}}>Home</Link>
        </li>
       </div>

        <div className="col mt-3 text-center">
        <li class="nav-item">
          <Link class="nav-link impression" to="/gallery">Gallery</Link>
        </li>
        </div>

        <div className="col mt-3 text-center">
        <li class="nav-item">
          <Link class="nav-link impression" to="/blog">Blog</Link>
        </li>
        </div>

        <div className="col mt-3 text-center">
        <li class="nav-item">
          <Link class="nav-link impression" to="/contact-us">Contact Us</Link>
        </li>
        </div>
        <div className="col mt-3 text-center">
        <li class="nav-item">
          <Link class="nav-link impression" to="/sign-in">Login / Register</Link>
        </li>
        </div>

        <div className="col pe-4 text-center mt-5">
  <div className="search-container">
    <svg
      style={{ color: 'white' }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
    <input type="text" className="search-input w-100" placeholder="Search" />
  </div>
</div>


       </ul>
      </div>
    </div>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" variant="outlined" style={{border: "none"}}>
      <span class="navbar-toggler-icon text-white" variant="outlined" style={{background:'#09ABF4' , border: "none" }}></span>
    </button>
  
  </div>
</nav>
</div>
</div>



 

  </>

  );
};

export default TopNavbar;