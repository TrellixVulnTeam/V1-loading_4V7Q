import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo">Shreyas Sreedhar</div>
        <nav className="nav">
          <li>
            <a href="https://www.behance.net/shreyas-sreedhar">Behance</a>
          </li>
          <li>
            <a href="https://www.github.com/shreyas-sreedhar">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/shreyas-sreedhar">Linkedin</a>
          </li>
          <li>
            <a href="https://medium.com/@shreyas.sreedhar">Blog</a>
          </li>
          {/* <li>
            <a href="/why">Why work with us?</a>
          </li> */}
        </nav>
        <div className="contact">
          <a href="/docs/Shreyas S Sreedhar - Resume.pdf">Resume</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
