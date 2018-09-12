import React    from 'react';
import { Link } from 'react-router-dom';
const Section = (props) => (
  <section className="main-call-to-action-container">
    <div className="main-call-to-action">
      <div className="row">
        <div className="copy">
          <h2>The easiest way to find that <em>Eureka!</em> moment</h2>
          <p>Eureka!Note helps you capture and prioritize ideas,
          projects, and to-do lists, so none of your genius is forgotten.</p>
        </div>
        <img src="http://pngimage.net/wp-content/uploads/2018/05/eureka-png-4.png"/>
      </div>
      <Link className="call-to-action-button" to="/signup">Sign Up For Free</Link>
    </div>
  </section>
);

export default Section;
