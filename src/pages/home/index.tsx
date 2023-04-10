/**
 * @author
 * @date 2023-04-10 15:14
 * @since 0.0.1
 */

import { FC, useState, useEffect } from "react";
// import classnames from 'classnames'
import styles from "./style.module.less";

export interface HomeProps {
  [key: string]: any;
}

const Home: FC<HomeProps> = (props) => {
  // const { config } = useRequest();
  return <div className={styles.home}>Home</div>;
};

export default Home;
