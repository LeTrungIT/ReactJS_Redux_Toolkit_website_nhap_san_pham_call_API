import React from "react";
import styles from "./Header.module.scss";

function Header(props) {
  return (
    <div className={styles.projectHeader}>
      <span className={styles.projectName}>
        Project website quản lý sản phẩm bằng REDUX+mockAPI
      </span>
    </div>
  );
}

export default Header;
