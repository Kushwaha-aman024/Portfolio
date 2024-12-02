import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm Aman Kushwaha a  passionate MERN Stack Developer specializes in developing web applications
          using the MERN stack, which includes MongoDB, Express.js, React, and
          Node.js. The MERN stack is a popular JavaScript-based technology stack
          that enables developers to build full-stack applications, handling
          both frontend and backend development.
        </p>
        <Link to="/contact">
        <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
        </div>
        <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutContent;
