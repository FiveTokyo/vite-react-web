/*
 * @Author: 伍东京 15211420607@163.com
 * @Date: 2023-04-13 09:32:02
 * @LastEditors: 伍东京 15211420607@163.com
 * @LastEditTime: 2023-04-18 14:56:01
 * @FilePath: /vite-react-web/src/pages/home/index.tsx
 */
/**
 * @author
 * @date 2023-04-10 15:14
 * @since 0.0.1
 */

import { FC, useState, useEffect } from "react";
// import classnames from 'classnames'
import { useAntdTable } from "ahooks";
import styles from "./style.module.less";

export interface HomeProps {
  [key: string]: any;
}

const Home: FC<HomeProps> = (props) => {
  // const { config } = useRequest();
  return <div className={styles.home}></div>;
};

export default Home;
