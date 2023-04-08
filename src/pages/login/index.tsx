/**
 * @author
 * @date 2023-04-08 17:11
 * @since 0.0.1
 */

import { FC, useState, useEffect } from "react";
// import classnames from 'classnames'
import styles from "./style.module.less";

export interface LoginProps {
  [key: string]: any;
}

const Login: FC<LoginProps> = (props) => {
  // const { config } = useRequest();
  return <div className={styles.login}>Login</div>;
};

export default Login;
