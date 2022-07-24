import React, { useState } from "react";

const NiftyLeft = () => {
  let [show, setShow] = useState(false);
  return (
    <div id="nifty_left">
      <div className="head">
        <h1>It’s so easy to be efficient</h1>
        <p>Team alignment, productivity, & smarter decisions come naturally when your data is not fragmented across multiple tools.</p>
      </div>
      <div className="items">
        <div className="head_title">
          <div className="tab_marker">
            <span></span>
          </div>
          <span className="tab_progress"></span>
          <h6 onClick={() => setShow(!show)}>Import into Nifty</h6>
        </div>
        {show ? (
          <div className="items_text">
            <p>Import from Asana, Basecamp, ClickUp, Jira, Trello, and Wrike — or import your .CSV & Excel sheets to pick up right where you left off.</p>
            <a href="#">See all imports</a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NiftyLeft;
