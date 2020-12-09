import React from "react";
import "../scss/skill.scss";

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";

import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiRedux } from "react-icons/si";

import { AiOutlineArrowDown } from "react-icons/ai";

const _handleClick = () => {
  window.scrollTo(0,3000);
};

const Skill = () => {
  return (
    <section className="skill">
      
      <h1 className="location_name">Skill</h1>
      <div className="skill_container">
        <div className="skill_me">
          <div className="skill_box first">
            <div className="skill_detail first">
              <h1>front end</h1>
              <div className="skill_set">
                <div className="skill_set_box html">
                  <IoLogoHtml5 />
                  <p>HTML</p>
                </div>
                <div className="skill_set_box css">
                  <IoLogoCss3 />
                  <p>CSS</p>
                </div>
                <div className="skill_set_box js">
                  <IoLogoJavascript />
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="skill_set">
                <div className="skill_set_box react">
                  <FaReact />
                  <p>React.js</p>
                </div>
                <div className="skill_set_box scss">
                  <FaSass />
                  <p>Sass/Scss</p>
                </div>
                <div className="skill_set_box redux">
                  <SiRedux />
                  <p>Redux</p>
                </div>
              </div>
            </div>
          </div>
          <div className="skill_box">
            <div className="skill_detail second">
              <h1>back end</h1>
              <div className="skill_set">
                <div className="skill_set_box node">
                  <FaNodeJs />
                  <p>Node.js</p>
                </div>
                <div className="skill_set_box express">
                  <div className="noSvg">
                    <p>Express</p>
                  </div>
                  <p>Express.js</p>
                </div>
              </div>
              <div className="skill_set">
                <div className="skill_set_box mysql">
                  <SiMysql />
                  <p>Mysql</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="skill_btn" onClick={_handleClick}>
        <AiOutlineArrowDown />
      </button>
    </section>
  );
};

export default Skill;
