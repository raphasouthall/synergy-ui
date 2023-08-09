// UI.tsx

import React from "react";
import Sidebar from "./Sidebar";
import Channel from "./Channel";
import "./UI.css";

const UI: React.FC = () => {
  return (
    <div className="ui_container">
      <div className="ui_sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="ui_channel">
        <Channel></Channel>
      </div>
    </div>
  );
};

export default UI;
