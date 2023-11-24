import React from 'react'
import './components.css'

const HeroSection = () => {
  return (
    <div>
    <section class="section1">
    <div class="flex">
        <div class="topleft flex flex-col justify-center px-2  ">
            <div class=" text-center">
                
            </div>
            <p className="my-1 text-center" style={{ fontSize: '100px', fontFamily: "'Dancing Script', cursive" }}>
    Petopia
  </p>
  <p className="my-1 text-center" style={{ fontSize: '50px', fontFamily: "'Dancing Script', cursive" }}>
    "Discover a world of pet care, Tips, and services at Petopia"
  </p>
  <p className="text-center" style={{ fontSize: '25px', fontFamily: "'Dancing Script', cursive" }}>
    Petopia is driven by a singular purpose: to nurture humankind by advancing care for animals.
  </p>
        </div>
        <div class="topright flex justify-center">
        <img src='Dog pic.svg' alt='Main Dog image' />

        </div>
    </div>
</section> 


   <section class="sec-2">
              <h4>Welcome to Utopia</h4>
              <section class="section-2">
             <article class="about-us sec-2-design grid-row-span-2 ">
              <div class>
                <img src="clinic 1.svg" alt="" class="clinic" />
                

                <h5>About Us</h5>
                <p>Petopia is a digital platform for pet lovers and pet owners that simplifies the care of their pet friend. We offer everything a pet needs to provide the best care for your four-legged friends.

                </p>
                <button class="btn btn2">Read More</button>
              </div>
             </article>

             <article class="our-story sec-2-design ">
              <div>
                <h5>Our Story</h5>
                <p>Contrary to popular
                  belief, Lorem Ipsum is not simply random text.
                  </p>
                  <button class="btn btn2">Read More</button>
              </div>
             </article>

             

             <article class="contact sec-2-design">
              <div>
                <h5>Contact</h5>
                <p>Contact us for more information about different available options</p>
                <button class="btn btn2">Read More</button>
              </div>
             </article>

             <article class="adoption sec-2-design">
              <div>
                <h5>Adoption</h5>
                <p>"Rescue, love, repeat."</p>
                <button class="btn btn2">Read More</button>
              </div>
             </article>

             <article class="pet-wiki sec-2-design">
              <div>
                <h5>PetWiki</h5>
                <p>"Discover the world of pets like never before with PetWiki – your go-to guide for all pet enthusiasts."
                  
                </p>
                <button class="btn btn2">Read More</button>
              </div>
             </article>
            </section>
          </section>
          <br /><br />

          <section class="sec-3">
            <h3>Our Services</h3>
            <section class="section-3">
              <article class="dog-image">
                <img src="spa dog.svg" alt="" class="spa-dog" />
              </article>
              <article class="healthcare sec-3-design">
                <div>
                  <h3>Health care</h3>
                  <br />
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latinone of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                  </p>
                  <br /><br /><br />
                  <button class="btn btn3">Read More</button>
                </div>
              </article>
              <article class="grooming sec-3-design" >
                <div>
                  <h3>Grooming</h3>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latinone of the more obscure Lati
                    
                  </p>
                  <br /><br />
                  <button class="btn btn3">Read More</button>
                </div>
              </article>

              <article class="daycare sec-3-design">
                <div>
                  <h3>Day Care</h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </p>
                    <p>
                      Richard McClintock, a Latinone of the more obscure Lati
                  </p>
                  <br /><br />
                  <button class="btn btn3">Read More</button>
                </div>
              </article>

              <article class="adoption-2 sec-3-design">
                <div>
                  <h3>Adoption</h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum 
is not simply random text. It has roots in a piece of classical Latin liteyears old.Richard McClintock, 
                  </p>
                  <br /><br />

                  <button class="btn btn3">Read More</button>
                  
                </div>
              </article>
            </section>
          </section>


          <section class="section-4">
            <article class="bull-dog-img">
              <div>
                <img src="pets 1.svg" alt="" class="pet-bull" />
              </div>
            </article>

            <article class="petwiki sec-4-design">
              <div>
                <br /><br />
                <h2>Pet Wiki - Pet’s Habits & Advices</h2>
                
                <h4>Why Dogs Bark and Curbing Excessive Barking </h4>
                <br /><br />
                <p>No one should expect a dog to never bark. That’s as unreasonable as expecting a child to never talk. But some dogs bark excessively. If that’s a problem in your home, the first step is figuring out what causes your dog to bark too much. Once you know why they are barking, you can start to treat their barking problem.
                  <br /><br /><br />
                </p>
                
                <button className="btn btn3" style={{ width: '120px' }}>Try it !!</button>


              </div>
            </article>
          </section>

          <section class="section-5">
            <h2>Shop - Products & Reviews</h2>

            <div class="shopping">
              <div class="product1 pro">
                <h4>Toys</h4>
                <img src="shop1 1.svg" alt="" />
                <button class="btn btn2 pro-btn"><a href="http://localhost:3002/">Try it !!</a></button>
              </div>

              <div class="product2 pro">
                <h4>Collar</h4>
                <img src="shop2 1.svg" alt="" />
                <button class="btn btn2 pro-btn">Try it !!</button>
              </div>

              <div class="product3 pro">
                <h4>Food</h4>
                <img src="image 5.svg" alt="" />
                <button class="btn btn2 pro-btn">Try it !!</button>
              </div>

              <div class="product4 pro">
                <h4>Shampoo</h4>
                <img src="shop4 1.svg" alt="" />
                <button class="btn btn2 pro-btn">Try it !!</button>
              </div>

              <div class="img-pro">
                <img src="shop 1.svg" alt="" class="dog-pro" />
              </div>

              <div class="product5 pro">
                <h4>Container</h4>
                <img src="nd 1.svg" alt="" />
                <button class="btn btn2 pro-btn">Try it !!</button>
              </div>

              <div class="product6 pro">
                <h4>Bowl</h4>
                <img src="shop5 1.svg" alt="" />
                <button class="btn btn2 pro-btn">Try it !!</button>
              </div>

              
            </div>

            
          </section>



</div>
   
  )
}



export default HeroSection