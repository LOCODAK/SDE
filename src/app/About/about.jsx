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
                Mauris commodo lacinia nisl, ut sodales ex vestibulum sed. Sed condimentum, nibh vitae dignissim laoreet, ex nisl imperdiet ex, at varius magna velit quis purus. Suspendisse at magna congue, rhoncus ligula tincidunt, efficitur purus. Vestibulum in vulputate odio. Curabitur gravida eleifend nulla, ut pulvinar velit ullamcorper et. Nullam venenatis egestas felis in imperdiet. Mauris suscipit magna massa, sit amet lobortis nunc consequat eget. Pellentesque vestibulum id purus et cursus. Donec id elementum lorem. Quisque ornare, tortor ut finibus porttitor, erat nibh mattis leo, faucibus rutrum ligula leo a nisl. Nam justo lorem, gravida nec
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
