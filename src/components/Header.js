import React from 'react'
import "./Header.css"


function Header() {
  return (
    <>
  

<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    
    <img src="../img/logo.jpeg" alt="Logo" width="150" height="90" class="d-inline-block align-text-top"/>
     <div className=" big-box">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="ok" id="main-color">Home</a>
        <a class="nav-link" href="no"id="main-color">Features</a>
        <a class="nav-link" href="yes"id="main-color">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true" href='okkk'id="main-color">Disabled</a>
 
        <button class="btn btn-outline-success me-2" type="button">Main button</button>
   

      </div>
    </div>
    </div>
  </div>
</nav>
   
     {/* hero section */}
      


  














    </>
  )
}

export default Header
