import * as ReactDOM from "react-dom";
import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import { Default as App } from "./App";
import "./index.css";
//
// You can edit this example in "example.tsx".
//
ReactDOM.render(
  <FluentProvider theme={teamsDarkTheme}>
    <App />
  </FluentProvider>,
  document.getElementById("root")
);
