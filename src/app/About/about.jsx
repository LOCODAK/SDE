import React from 'react';
import './about.css'

function About() {
  return (
    
    <div className="container mx-auto">
      <main className="min-h-screen">
        <section className="section-4">
          <article className="bull-dog-img">
            <div>
              <img src="vetu 1.svg" alt="" className="pet-bull" />
            </div>
          </article>

          <article className="petwiki sec-4-design">
            <div>
              <br /><br />
              <h2>Our Story</h2>
              <br /><br />

              <p>
              Petopia is our labour of love, blending tech savvy with our passion for pets. Started of as a project idea for a course in our undergrad, our site is a tribute to the joy our furry friends bring into our lives. We aim to empower pet owners with top-notch care tips, services, and a supportive community. This is where tech-geekery meets whisker wisdom, all to keep your companions in tip-top spirits. So, pounce on over, dig into our treasure trove of tips, and join the pet party!
 <br /><br /><br/>
              </p>

              <button className="btn btn3" style={{ width: '120px' }}>Read</button>
            </div>
          </article>
        </section>

        <br /><br /><br/>

        <section className="ourteam">
          <h2 style={{ textAlign: 'center' }}>Our Team</h2>
          <section className="team">
            <section>
              <ul>
                <li>
                  Aditya Kotra
                </li>
                <li>
                  Aryan vardhan
                </li>
                <li>
                  Arun Kumar KB
                </li>
              </ul>
            </section>
            <section>
              <ul>
                <li>
                  Kartheek Kotha
                </li>
                <li>
                  Adhityanarayan Ramkumar
                </li>
                <li>
                  Namit Ajaria
                </li>
              </ul>
            </section>
            <section>
              <ul>
                <li>
                  Haradeep Pidaka
                </li>
                <li>
                  Ramakrishna Naidu Bhupati
                </li>
                <li>
                  L.Gnanesh Chowdary
                </li>
              </ul>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default About;
