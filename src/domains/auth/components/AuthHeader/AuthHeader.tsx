import classes from "./AuthHeader.module.scss";

const AuthHeader = () => {
  return (
    <header className={classes["auth-header"]}>
      <h3 className="no-margin">PharmNexus</h3>
    </header>
  );
};

export default AuthHeader;
