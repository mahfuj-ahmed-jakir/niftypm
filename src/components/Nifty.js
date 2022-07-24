import React from "react";
import NiftyLeft from "./NiftyLeft";
import NiftyRight from "./NiftyRight";

const Nifty = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div id="nifty">
            <div className="nifty">
              <NiftyLeft />
              <NiftyRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nifty;
