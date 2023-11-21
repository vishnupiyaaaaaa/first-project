import React from 'react'
import "./Title.css"
function Title() {
  return (
    <>
   <div className="box container-fluid text-center">
   <img src="../img/bg1.jpg" alt="" />
   <h3>When a Man's Stomach Is Full It Makes No Difference Whether He is Rich Or Poor</h3>
   <p>Lorem ipsum dolrum temporibus fugit voluptas aliquid dolore libero similique et maiores asperiores, nam soluta.</p>
   <button className="btn btn-outline-success me-2 btn1" type="button">Read More</button>
   </div>
    {/* explore food */}
    <section id='explore'>
      <div className='explore-food wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-content text-center"id='exploreid'>
                <h2 className='pt-5' >Explore Our Foods</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat eveniet laboriosam consequuntur, ullam quae odio tenetur necessitatibus, molestias, iure animi voluptatum optio dolore vero in nulla possimus odit? Iure!</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>


     {/* cards */}
    <div className="container-fluid">
      <div className="row" id="cardbox"> 
        <div className="col-3" id="cards">
        <div className="card" id="card1" >
  <img src="../img/bg3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Desserts</h5>
    <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="hi"class="btn btn-primary">Add to cart</a>
  </div>
</div>
        </div>
        <div className="col-3"id="cards">
        <div className="card" id="card1" >
  <img src="../img/bg4.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Sandwiches</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="hi"class="btn btn-primary">Add to cart</a>
  </div>
</div>
        </div>
        <div className="col-3"id="cards">
        <div className="card" id="card1" >
  <img src="../img/bg2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Wraps</h5>
    <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="hi"class="btn btn-primary">Add to Cart</a>
  </div>
</div>
        </div>
      </div>
    </div>




    </>
  )
}

export default Title

