import React, { useState } from "react";
import "../scss/project.scss";
import apeach from "../images/apeach.PNG";
import a1 from "../images/a1.PNG";
import a2 from "../images/a2.PNG";
import a3 from "../images/a3.PNG";
import a4 from "../images/a4.PNG";

import b1 from "../images/b1.PNG";
import b2 from "../images/b2.PNG";
import b3 from "../images/b3.PNG";
import b4 from "../images/b4.PNG";

import c1 from "../images/c1.PNG";
import c2 from "../images/c2.PNG";
import c3 from "../images/c3.PNG";
import c4 from "../images/c4.PNG";
import c5 from "../images/c5.PNG";
import c6 from "../images/c6.PNG";

import blog from "../images/blog.PNG";
import forecast from "../images/forecast.PNG";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";

const _handleClick = () => {
  window.scrollTo(0,4000);
};

const itemList = [
  {
    name: "어피치 프렌즈 스토어 쇼핑몰",
    dev_period: "2020.08.24 ~ 2020.08.30",
    explan:
      "HTML, CSS, JS을 익히고 React환경에서 처음으로 만든 스토어 쇼핑몰 입니다.",
    p1: "1. React v16.8 에 새로 도입된 React hook을 사용하여 제작",
    p2: "2. React-Router를 활용하여 페이지 전환",
    p3: "3. 반응형으로 제작",
    p4:
      "4. 기술 경험이 중점이라 구성 및 기능이 비슷한 페이지는 생략하였습니다.",
    p5: "",
  },
  {
    name: "가격 예측 웹 사이트",
    dev_period: "2020.10.28 ~",
    explan:
      "프론트엔드와 백엔드를 같이 개발한 텐서플로 JS 가격예측 웹 사이트 입니다.",

    p1:
      "1. 프론트엔드 React.js의 활용법을 익히고 백엔드 서버와 데이터베이스를 연동",
    p2: "2. 서버와 DB는 Node.js-Express.js 와 MySql 사용",
    p3: "3. SCSS를 활용하여 디자인 및 반응형 웹 구현",
    p4: "4. 회원가입/로그인 구현 및 패스워드 DB저장시 SHA-1 해쉬",
    p5: "5. 게시판 CRUD 구현",
  },
  {
    name: "개인 블로그",
    dev_period: "2020.11.18 ~",
    explan:
      "백엔드를 외부 서버와 DB를 사용하여 개발하고자 공부중인 개인 블로그 입니다.",
    p1: "1. 프론트단을 React.js를 활용하여 개발 중",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
  },
];

const Project = () => {
  const [hidden, setHidden] = useState(true);

  const [select, setSelect] = useState(0);

  const handleProject = (option) => {
    if (option === 1) {
      setSelect(0);
    } else if (option === 2) {
      setSelect(1);
    } else {
      setSelect(2);
    }

    document.body.classList.add("hidden");
    setHidden(false);
  };

  const closeBtn = () => {
    setHidden(true);
    document.body.classList.remove("hidden");
  };

  const _gotogit = () => {};
  const _devpage = () => {
    if (select === 0) {
    }
  };

  return (
    <section className={hidden ? "project" : "project hidden"}>
      <h1 className="location_name">Project</h1>
      <div className="for_direction">
        <div className="project_box" onClick={() => handleProject(1)}>
          <div className="proj_img">
            <img src={apeach} alt="" />
          </div>
          <div className="proj_description">
            <h3>어피치 프렌즈 스토어 쇼핑몰</h3>
            <p>2020.08.24 ~ 2020.08.30</p>
          </div>
        </div>

        <div className="project_box" onClick={() => handleProject(2)}>
          <div className="proj_img">
            <img src={forecast} alt="" />
          </div>
          <div className="proj_description">
            <h3>가격 예측 웹 사이트</h3>
            <p>상시 업데이트 중</p>
          </div>
        </div>

        <div className="project_box" onClick={() => handleProject(3)}>
          <div className="proj_img">
            <img src={blog} alt="" />
          </div>
          <div className="proj_description">
            <h3>개인 블로그</h3>
            <p>상시 업데이트 중</p>
          </div>
        </div>

        <div className={hidden ? "modal hidden" : "modal"}>
          <div className="close_btn_box">
            <button className="close_button" onClick={() => closeBtn()}>
              <ImCross />
            </button>
          </div>

          <div className="md_overlay"></div>
          <div className="md_content">
            <h1>{itemList[select].name}</h1>
            <section>
              <div className="modal_text">
                {itemList[select].explan}
                <ul className="p_box">
                  <li>{itemList[select].p1}</li>
                  <li>{itemList[select].p2}</li>
                  <li>{itemList[select].p3}</li>
                  <li>{itemList[select].p4}</li>
                  <li>{itemList[select].p5}</li>
                </ul>
              </div>
              {(select === 0 && (
                <div className="project_img_box">
                  <div className="img_container">
                    <img src={a1} alt="" />
                    <img src={a2} alt="" />
                  </div>
                  <div className="img_container">
                    <img src={a3} alt="" />
                    <img src={a4} alt="" />
                  </div>
                </div>
              )) ||
                (select === 1 && (
                  <div className="project_img_box">
                    <div className="img_container">
                      <img src={c1} alt="" />
                      <img src={c2} alt="" />
                    </div>
                    <div className="img_container">
                      <img src={c5} alt="" />
                      <img src={c4} alt="" />
                    </div>
                    <div className="img_container">
                      <img src={c3} alt="" />
                      <img src={c6} alt="" />
                    </div>
                  </div>
                )) ||
                (select === 2 && (
                  <div className="project_img_box">
                    <div className="img_container">
                      <img src={b1} alt="" />
                      <img src={b2} alt="" />
                    </div>
                    <div className="img_container">
                      <img src={b3} alt="" />
                      <img src={b4} alt="" />
                    </div>
                  </div>
                ))}
            </section>
            <div className="git_web">
              <button onClick={_gotogit}>
                <div>
                  <AiFillGithub />
                  <a
                    href={
                      (select === 0 &&
                        `https://github.com/seob717/apeach-friends`) ||
                      (select === 1 &&
                        `https://github.com/seob717/forecast-v4`) ||
                      (select === 2 && `https://github.com/seob717/react-store`)
                    }
                    target="_blank"
                  >
                    깃허브에서 코드 확인
                  </a>
                </div>
              </button>
              <button onClick={_devpage}>
                <div>
                  <AiFillChrome />
                  {(select === 0 && (
                    <a
                      href="https://kakaoapeach-25775.web.app/"
                      target="_blank"
                    >
                      개발 페이지로 이동
                    </a>
                  )) ||
                    (select === 1 && (
                      <span>해당 페이지는 배포 전입니다.</span>
                    )) ||
                    (select === 2 && (
                      <a href="https://seob-ef308.web.app/" target="_blank">
                        개발 페이지로 이동
                      </a>
                    ))}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="proj_btn" onClick={_handleClick}>
        <AiOutlineArrowDown />
      </button>
    </section>
  );
};

export default Project;
