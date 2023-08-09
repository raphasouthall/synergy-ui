import * as React from "react";
import { useState } from "react";
import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionToggleEventHandler
} from "@fluentui/react-components";

export const Controlled = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState<boolean>(false);
  const [isPanelHovered, setIsPanelHovered] = useState<boolean>(false);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const [openItems, setOpenItems] = useState(["1"]);
  const handleToggle: AccordionToggleEventHandler<string> = (event, data) => {
    setOpenItems(data.openItems);
  };

  // Determine the header background color based on the hover and toggle states
  const headerBackgroundColor = isToggled
    ? teamsDarkTheme.colorNeutralBackground3
    : isHeaderHovered
    ? teamsDarkTheme.colorNeutralBackground1
    : teamsDarkTheme.colorNeutralBackground3;

  // Determine the panel background color based on the hover and toggle states
  const panelBackgroundColor = isToggled
    ? teamsDarkTheme.colorNeutralBackground1
    : isPanelHovered
    ? teamsDarkTheme.colorNeutralBackground1
    : teamsDarkTheme.colorNeutralBackground3;

  return (
    <FluentProvider theme={teamsDarkTheme}>
      <Accordion
        openItems={openItems}
        onToggle={handleToggle}
        multiple
        collapsible
      >
        <AccordionItem value="1">
          <AccordionHeader
            size="large"
            style={{
              overflow: "hidden",
              margin: 0,
              backgroundColor: headerBackgroundColor
            }}
            onMouseEnter={() => setIsHeaderHovered(true)}
            onMouseLeave={() => setIsHeaderHovered(false)}
          >
            Company
          </AccordionHeader>
          <AccordionPanel
            style={{
              paddingLeft: "40px",
              overflow: "hidden",
              margin: 0,
              backgroundColor: panelBackgroundColor
            }}
            onClick={() => setIsToggled(!isToggled)}
            onMouseEnter={() => setIsPanelHovered(true)}
            onMouseLeave={() => setIsPanelHovered(false)}
          >
            User
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </FluentProvider>
  );
};
