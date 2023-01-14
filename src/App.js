import Nav from './components/Nav';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css';


function App() {
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
    </div>
  );
}

export default App;
