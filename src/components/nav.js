import React, { useState } from "react";
import "../scss/nav.scss";
import { ImMenu } from "react-icons/im";

const list = ["home", "about", "skill", "project", "contact"];

const _handleClick = (ele) => {
  console.log(ele);
  if (ele === "home") {
    window.scrollTo(0, 0);
  } else if (ele === "about") {
    window.scrollTo(0, 1000);
  } else if (ele === "skill") {
    window.scrollTo(0, 2000);
  } else if (ele === "project") {
    window.scrollTo(0, 3000);
  } else if (ele === "contact") {
    window.scrollTo(0, 4000);
  }
};

const Nav = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section className={toggle ? "nav" : "nav active"}>
      <div className="nav_box">
        <h1 onClick={() => alert(window.scrollY)}>shimyuseob</h1>
        <button onClick={() => setToggle(!toggle)} className="btn">
          <ImMenu />
        </button>

        <ul className="desktop_ul">
          {list.map((ele, index) => (
            <li key={index} onClick={() => _handleClick(ele)}>
              {ele}
            </li>
          ))}
        </ul>
      </div>

      <ul className={toggle ? "phone_ul" : "phone_ul active"}>
        {list.map((ele, index) => (
          <li key={index} onClick={() => _handleClick(ele)}>
            {ele}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Nav;
