import React, { useState } from "react";
import { items } from "../data/data";

const NiftySlide = () => {
  let [active, setActive] = useState(0);

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className={active == index ? "items" : "items last_child"} style={active == index ? itemsShow : itemsHide}>
          <div className="items_left">
            <span className={active == index ? "active" : "dotted"}>
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
            <h6 onClick={() => setActive(index)} style={{ color: active == index ? "#00baab" : "#000000" }}>
              {item.title}
            </h6>
            <div style={active == index ? rightShow : rightHide} className="rigth_text">
              <p>{item.description}</p>
              <a href={item.link}>{item.linkTitle}</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

let itemsShow = {
  height: "200px",
  transition: "all linear 0.2s",
  WebkitTransition: "all linear 0.2s",
  MozTransition: "all linear 0.2s",
  msTransition: "all linear 0.2s",
  OTransition: "all linear 0.2s",
};

let itemsHide = {
  height: "65px",
  transition: "all linear 0.2s",
  WebkitTransition: "all linear 0.2s",
  MozTransition: "all linear 0.2s",
  msTransition: "all linear 0.2s",
  OTransition: "all linear 0.2s",
  "&:lastChild": {
    height: "25px",
  },
};

let rightShow = {
  marginTop: "12px",
  transition: "all linear 0.2s",
  WebkitTransition: "all linear 0.2s",
  MozTransition: "all linear 0.2s",
  msTransition: "all linear 0.2s",
  OTransition: "all linear 0.2s",
};

let rightHide = {
  marginTop: "42px",
  transition: "all linear 0.2s",
  WebkitTransition: "all linear 0.2s",
  MozTransition: "all linear 0.2s",
  msTransition: "all linear 0.2s",
  OTransition: "all linear 0.2s",
};

export default NiftySlide;
