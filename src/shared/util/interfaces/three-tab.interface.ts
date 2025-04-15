import { ReactNode } from "react";

interface SingleTab {
  component: ReactNode;
  label: string;
}

export interface ThreeTab {
  tabOne: SingleTab;
  tabTwo: SingleTab;
  tabThree: SingleTab;
}
