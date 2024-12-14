import { Children } from "../../../../common/types/common-types";

import classes from './AuthPageLayout.module.scss';

const AuthPageLayout: React.FC<Children> = ({ children }) => {
  return <main className={classes["auth-layout"]}>{children}</main>;
};

export default AuthPageLayout;
