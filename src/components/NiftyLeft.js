import React from "react";
import NiftySlide from "./NiftySlide";
import { items } from "../data/data";

const NiftyLeft = () => {
  // let [active, setActive] = useState(false);

  return (
    <div id="nifty_left">
      <div className="head">
        <h1>It’s so easy to be efficient</h1>
        <p>Team alignment, productivity, & smarter decisions come naturally when your data is not fragmented across multiple tools.</p>
      </div>
      {items.map((items, index) => (
        <NiftySlide key={index} title={items.title} description={items.description} link={items.link} linkTitle={items.linkTitle} />
      ))}
    </div>
  );
};

export default NiftyLeft;
