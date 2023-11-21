import React from 'react'
import "./Hero.css"
function Hero() {
  return (
    <>
    <div className="container-fluid" id="mainbox">

   
    <div className="row ">
      <div className="col-4 text-start"id="box1">
        <h2 id="descp">Good choices are good investments</h2>
        <p id="descp1">Welcome to Tastey Nibbles,  Established with a passion for delivering an unforgettable dining experience, we take pride in crafting delectable dishes that tantalize the taste buds and create lasting memories. .</p>
        <button type="button" class="btn btn-primary" id="btn1">Order Now </button>
      
      
      </div>
      <div className="col-6"id="box2">
        <img src="../img/food.jpg" id="food"  alt="" />
      </div>
     </div>
    </div>

     <div className="container-fluid" id='mainbox-2'>
      <div className="row"></div>
      <div className="col-3"id="cards">
        <h3>1295+</h3>
        <h6>Orders</h6>
      </div>
      <div className="col-3"id="cards">
      <h3>134568+</h3>
        <h6>Happy Customers</h6>
      </div>
      <div className="col-3"id="cards">
      <h3>150+</h3>
        <h6>Outlets</h6>
      </div>
      <div className="col-3" id="cards">
      <h3>60</h3>
        <h6>Chefs</h6>
      </div>
     
      


     </div>

     <div className="row ">
      <div className="col-6" id="box3">
        <img src="../img/food1.png"className='image-fluid rounded' alt="" srcset="" id="img2" />
            
         </div>
      <div className="col-4 " id="box4">
           <h3 className='maincolor'>OUR CUISINES</h3>
           <p className='mt-3'>
           Indulge in a symphony of flavors as our chefs artfully blend traditional and modern culinary techniques. From Indo to Chineese a diverse array of options, our menu caters to a wide range of palates.
           </p>

      </div>
     </div>
     

     <div className="row ">
     <div className="col-4" id="box4">
     <h3 className='maincolor'>SERVICES</h3>
           <p className='mt-3'>
           We are committed to sourcing the finest, locally sourced ingredients to create dishes that not only taste exceptional but also reflect our dedication to sustainability. Every plate tells a story of quality, freshness, and a commitment to supporting local producers.
           </p>
      
         </div>
      <div className="col-6" id="box3">
        
      <img src="../img/food2.png"className='image-fluid rounded' alt="" srcset="" id="img2" />
      </div>
     </div>
    
       
     
    






      {/* <div className="box">
        hello
        <div className="text">
          learn everything for free
        </div>
        <div className="pic"></div>

      </div> */}
    </>
  )
}

export default Hero
