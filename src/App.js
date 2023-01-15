import Nav from './components/Nav';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css';
import { useState } from 'react';


function App() {
  const [portfolioSelect, setPortfolioSelected] = useState(false)
  const [aboutMeSelect, setAboutMeSelected] = useState(true)
  const [resumeSelect, setResumeSelected] = useState(false)
  const [contactSelect, setContactSelected] = useState(false)

  return (
    <div className="App">
      <header>
      <Nav 
      portfolioSelect = {portfolioSelect}
      setPortfolioSelected= {setPortfolioSelected}
      aboutMeSelect = {aboutMeSelect}
      setAboutMeSelected={setAboutMeSelected}
      resumeSelect={resumeSelect}
      setResumeSelected={setResumeSelected}
      contactSelect={contactSelect}
      setContactSelected={setContactSelected}
      />
      </header>
      <section>
        {portfolioSelect && <Portfolio/>}
        {aboutMeSelect && <About />}
        {resumeSelect && <Resume />}
        {Contact && <Contact />}
      </section>
    </div>
  );
}

export default App;
