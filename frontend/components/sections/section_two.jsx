import React from "react";
import { Link } from "react-router-dom";
const SectionTwo = () => (
  <section className="section-two">
      <h1>Focus on what matters most</h1>
    <div className="">
      
      <div className="row-two">
        <p>Manage everything from big projects to personal moments.</p>
        <p>Capture ideas and inspiration in notes, voice, and pictures.</p>
        <p>Never lose track of your tasks and deadlines.</p>
      </div>
    </div>
    <footer>
      <div>This site was coded by
        <Link to="https://github.com/MattVanLaw"> Matt Van Dyke <i className="fab fa-github"></i>
        </Link>
      </div>
    </footer>
  </section>
);

export default SectionTwo;
