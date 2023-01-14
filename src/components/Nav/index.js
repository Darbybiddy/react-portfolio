import React from "react";

function Nav(props) {
  const {
    portfolioSelect,
    setPortfolioSelected,
    aboutMeSelect,
    setAboutMeSelected,
    resumeSelect,
    setResumeSelected,
    contactSelect,
    setContactSelected,
  } = props;

  return (
    <header>
      <h2 className="header-title">
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸 Darbys React Portfolio
            <a href="https://github.com/Darbybiddy/react-portfolio"></a>
          </span>
        </a>
      </h2>
      <div className="nav">
        <nav>
          <ul className="flex-row">
            <li className={`${portfolioSelect && "navActive"}`}>
              <span
                data-testid="portfolio"
                onClick={() => {
                  setAboutMeSelected(false);
                  setContactSelected(false);
                  setPortfolioSelected(true);
                  setResumeSelected(false);
                }}
              >
                Portfolio
              </span>
            </li>
            <li className={`${aboutMeSelect && "navActive"}`}>
              <a
                data-testid="about"
                href="#about"
                onClick={() => {
                  setAboutMeSelected(true);
                  setPortfolioSelected(false);
                  setContactSelected(false);
                  setResumeSelected(false);
                }}
              >
                About me
              </a>
            </li>
            <li className={`${resumeSelect && "navActive"}`}>
              <span
                onClick={() => {
                  setResumeSelected(true);
                  setContactSelected(false);
                  setAboutMeSelected(false);
                  setPortfolioSelected(false);
                }}
              >
                Resume
              </span>
            </li>
            <li className={`${contactSelect && "navActive"}`}>
              <a
                href="#contact"
                onClick={() => {
                  setAboutMeSelected(false);
                  setPortfolioSelected(false);
                  setContactSelected(true);
                  setResumeSelected(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
