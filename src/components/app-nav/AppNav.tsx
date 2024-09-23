import { Outlet } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <>
      <nav className={styles.nav}>App navigation</nav>
      <Outlet />
    </>
  );
}

export default AppNav;
