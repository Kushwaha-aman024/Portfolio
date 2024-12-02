import "./FooterStyles.css";

import React from "react";
import { FaHome, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Prayagraj,Uttar Pradesh</p>
              <p>India.</p>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                9170406368,8795803953
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                kushwahaaman@gmail.c{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <div classNAme="social">
            <h4>About me</h4>
            <p>
              This is me Aman Kushwaha, a passionate and skilled MERN stack
              developer with experience in building scalable, responsive, and
              efficient web applications.
            </p>
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Footer;
