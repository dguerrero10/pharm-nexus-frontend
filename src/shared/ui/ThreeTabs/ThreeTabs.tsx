import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { ThreeTab } from "../../util/interfaces/three-tab.interface";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const ThreeTabsPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabStyles = {
  textTransform: "none",
  fontWeight: "600",
  fontSize: "16px",
};

const ThreeTabs: React.FC<ThreeTab> = ({ tabOne, tabTwo, tabThree }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ ...tabStyles }} label={tabOne.label} {...a11yProps(0)} />
          <Tab sx={{ ...tabStyles }} label={tabTwo.label} {...a11yProps(1)} />
          <Tab sx={{ ...tabStyles }} label={tabThree.label} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <ThreeTabsPanel value={value} index={0}>
        {tabOne.component}
      </ThreeTabsPanel>
      <ThreeTabsPanel value={value} index={1}>
        {tabTwo.component}
      </ThreeTabsPanel>
      <ThreeTabsPanel value={value} index={2}>
        {tabThree.component}
      </ThreeTabsPanel>
    </Box>
  );
};

export default ThreeTabs;
