import React from "react";
import "../scss/home.scss";
import background from "../images/background.jfif";
import logo from "../images/logo.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";

const _handleClick = () => {
  window.scrollTo(0,1000);
};

const Home = () => {
  return (
    <section className="home">
      <div className="home_box">
        <div className="background">
          <img src={background} alt="" className="bg_img" />
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="text">
            <div className="announce">
              <h1>front-end</h1>
              <br />
              <h1>developer</h1>
            </div>

            <hr />
            <div className="typewriter">
              <p>안녕하세요. 프론트엔드 개발자 심유섭 입니다.</p>
            </div>
          </div>
          <button className="home_btn" onClick={_handleClick}>
            <AiOutlineArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
