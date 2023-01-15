import React, { useState } from "react";
import Footer from "../Footer";
import Modal from "../Modal";

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reactProject, setReactProject] = useState();
  const [projects] = useState([
    {
      name: "Note Taker",
      description:
        " using Express.js and JSON files to save and retrieve data. ",
      website: "https://github.com/Darbybiddy/note-taker",
      repository: "https://github.com/Darbybiddy/note-taker",
    },
    {
      name: "Run Buddy",
      description: "A website that offers fitness training services.",
      website: "https://github.com/Darbybiddy/Run-Buddy",
      repository: "https://github.com/Darbybiddy/Run-Buddy",
    },
    {
      name: "Horiseon-Refactor",
      description:
        "change the HTML, and the CSS code to make it more readable and more efficent for other coders to change something if they need to.",
      website: "https://github.com/Darbybiddy/Horiseon-refactor",
      repository: "https://github.com/Darbybiddy/Horiseon-refactor",
    },
  ]);

  const openLink = (image,i)=>{
    setReactProject({...image, index: i})
    setIsModalOpen(!isModalOpen)
  }

  return (
    <section>
      <div className="my-portfolio">
        <div className="portfolio-title">
          <h3>My Portfolio</h3>
        </div>
        <div>
          {isModalOpen && (<Modal onClose={openLink} reactProject={reactProject} />)}
          <div>
            <div>
              {projects.map((image, i) => (
                <div key={image.name} className="project-list">
                  <img
                    src={require(`../../assets/projects/${i}.png`)}
                    alt={image.name}
                    className="challenge"
                    onClick={() => openLink(image, i)}
                  />
                  <h3 className="project-title">{image.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Portfolio;
