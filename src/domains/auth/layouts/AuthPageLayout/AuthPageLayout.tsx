import { Children } from "../../../../util/interfaces/common-types";

import classes from './AuthPageLayout.module.scss';

const AuthPageLayout: React.FC<Children> = ({ children }) => {
  return <main className={classes["auth-layout"]}>{children}</main>;
};

export default AuthPageLayout;
