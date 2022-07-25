import React, { useState } from "react";

const NiftySlide = ({ title, description, linkTitle, link }) => {
  let [active, setActive] = useState(false);

  return (
    <>
      <div className="items" style={active ? itemsShow : itemsHide}>
        <div className="items_left">
          <span className={active ? "active" : "dotted"}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </span>
        </div>
        <div className="items_right">
          <h6 onClick={() => setActive(!active)} style={{ color: active ? "#00baab" : "#000000" }}>
            {title}
          </h6>
          <div style={active ? rightShow : rightHide} className="rigth_text">
            <p>{description}</p>
            <a href={link}>{linkTitle}</a>
          </div>
        </div>
      </div>
    </>
  );
};

let itemsShow = {
  height: "235px",
  transition: "all linear 0.2s",
  webkitTransition: "all linear 0.2s",
  mozTransition: "all linear 0.2s",
  msTransition: "all linear 0.2s",
  oTransition: "all linear 0.2s",
};

let itemsHide = {
  height: "65px",
  transition: "all linear 0.2s",
  webkitTransition: "all linear 0.2s",
  mozTransition: "all linear 0.2s",
  msTransition: "all linear 0.2s",
  oTransition: "all linear 0.2s",
  "&:last-child": {
    height: "25px !important",
  },
};

let rightShow = {
  marginTop: "12px",
  transition: "all linear 0.2s",
  webkitTransition: "all linear 0.2s",
  mozTransition: "all linear 0.2s",
  msTransition: "all linear 0.2s",
  oTransition: "all linear 0.2s",
};

let rightHide = {
  marginTop: "42px",
  transition: "all linear 0.2s",
  webkitTransition: "all linear 0.2s",
  mozTransition: "all linear 0.2s",
  msTransition: "all linear 0.2s",
  oTransition: "all linear 0.2s",
};

export default NiftySlide;
