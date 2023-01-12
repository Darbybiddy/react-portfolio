import React from "react";
import Footer from "../Footer";

function About() {
  return (
    <section>
      <div className="about">
        <h2 className="subtitle">Professional Portfolio</h2>
        <img src="" className="" alt=""></img>
      </div>
      <div id="personal" className="aboutme">
        <div className="about-title">
          <h2>About Me</h2>
        </div>
        <div>
          <img src="" alt="profile picture"></img>
          <p>
            Hello, I am Darby Biddy and im a beginner Software Developer. I am
            from Iowa Park Texas. I went to school at Hardin-Simmons University
            where I got my degree in Graphic Design. I plan on doing some
            personal projects before starting in this career field. I took a
            Fullstack software development class for 6 months where I learned
            all types of programs. in this class we focused on HTML, CSS,
            JavaScript, React, Node.js, SQL, NoSQL, Express.js, and API's.
          </p>
        </div>
      </div>
      <footer></footer>
    </section>
  );
}

export default About;
