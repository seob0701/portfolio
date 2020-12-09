import React from "react";
import "../scss/about.scss";

import { AiOutlineArrowDown } from "react-icons/ai";

const _handleClick = () => {
  window.scrollTo(0,2000);
};

const About = () => {
  return (
    <section className="about">
      <h1 className="location_name">About Me</h1>
      <div className="about_box">
        <div className="about_me">
          <div className="info_box first">
            <div className="information first">
              <h1>센스있는</h1>
              <h3>프론트엔드 개발자</h3>

              {/* 면접사진 */}
              <img src="" alt="" />
            </div>
            <div className="information">
              <h1>information</h1>
              <h3>심유섭</h3>
              <p>1995.07.01</p>
              <p>Tel. 010-9688-5549</p>
              <p>Email. shimyuseob@gmail.com</p>
            </div>
          </div>
          <div className="info_box">
            <div className="information">
              <h1>education</h1>
              <h3>공주대학교</h3>
              <p>컴퓨터공학과</p>
              <p>2014.03 ~ 현재</p>
              <h3>한광고등학교</h3>
              <p>이과계열</p>
              <p>2011.03 ~ 2014.02</p>
            </div>
            <div className="information">
              <h1>certification</h1>
              <h3>정보처리기사</h3>
              <p>한국산업인력공단</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={_handleClick}>
        <AiOutlineArrowDown />
      </button>
    </section>
  );
};

export default About;
