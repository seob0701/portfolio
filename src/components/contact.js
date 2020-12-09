import React, { useState } from "react";
import "../scss/contact.scss";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
  const [clicked, setClicked] = useState(false);

  function copy_to_clipboard(ele) {
    if (ele === "tel") {
      var copyText = document.getElementById("tel");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("Copy");
      setClicked(true);
      setTimeout(() => setClicked(false), 3000);
    } else {
      var copyText = document.getElementById("email");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("Copy");
      setClicked(true);
      setTimeout(() => setClicked(false), 3000);
    }
  }
  return (
    <section className="contact">
      <h1 className="location_name">Contact</h1>
      <div className="contact_box">
        <section className="info">
          <p>심유섭</p>
          <div>
            <p>Tel.</p>
            <input
              id="tel"
              value="01096885549"
              onClick={() => copy_to_clipboard("tel")}
              readOnly
            />
          </div>
          <div>
            <p>email.</p>
            <input
              id="email"
              value="shimyuseob@gmail.com"
              onClick={() => copy_to_clipboard("email")}
              readOnly
            />
          </div>
          <p>
            <GrInstagram />
            <a href="https://www.instagram.com/shimyuseob/" target="_blank">
              Instagram
            </a>
          </p>
        </section>
        <p className={!clicked ? "copy" : "copy ed"}>
          {!clicked
            ? "연락처를 클릭하시면 클립보드로 복사됩니다."
            : "복사되었습니다."}
        </p>
      </div>

      <h1 className="byebye">Thank you for watching</h1>
      <p className="byebyebye">Copyright2020.shimyuseob.All rights reserved</p>
    </section>
  );
};

export default Contact;
