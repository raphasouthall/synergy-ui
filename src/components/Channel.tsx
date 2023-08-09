import React from "react";
import "./Channel.css";
import CardList from "./CardList";
import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";

const Channel: React.FC = () => {
  return (
    <FluentProvider theme={teamsDarkTheme}>
      <div
        className="channel_container"
        style={{ backgroundColor: teamsDarkTheme.colorNeutralBackground1 }}
      >
        <div className="channel_header">User Channel</div>
        <div className="channel_body">
          <CardList></CardList>
        </div>
      </div>
    </FluentProvider>
  );
};

export default Channel;
