// ResponsiveDivs.tsx
import React from "react";
import "./Sidebar.css";
import { Controlled } from "./Controlled";
import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";

const Sidebar: React.FC = () => {
  return (
    <FluentProvider theme={teamsDarkTheme}>
      <div
        className="sidebar_container"
        style={{ backgroundColor: teamsDarkTheme.colorNeutralBackground3 }}
      >
        <div className="sidebar_header">Synergy Support</div>
        <div className="sidebar_body">
          <Controlled></Controlled>
        </div>
      </div>
    </FluentProvider>
  );
};

export default Sidebar;
