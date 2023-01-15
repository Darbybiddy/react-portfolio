import React from "react";
import resume from "../../assets/resume.jpg";

function Resume() {
  return (
    <section>
      <header className="resume">
        <h2>Darbys Resume</h2>
      </header>
      <div>
        <a href={resume}></a>
      </div>
      <footer></footer>
    </section>
  );
}

export default Resume;
