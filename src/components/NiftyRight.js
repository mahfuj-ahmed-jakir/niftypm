import React from "react";
import { role, brand } from "../data/data";

const NiftyRight = () => {
  return (
    <div id="ring">
      <div className="ring">
        <div className="brand_ring">
          <div className="round_one">
            <div className="round_two">
              <div className="round_three">
                <div className="circle">
                  {brand.map((items, index) => (
                    <div key={index} className="round_icon">
                      <img src={items.img} alt={items.name} />
                    </div>
                  ))}
                </div>
                <img src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" alt="logo" />
                {role.map((items, index) => (
                  <div key={index} className="role">
                    <img src={items.img} alt="icon" />
                    <h5>{items.role}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NiftyRight;
