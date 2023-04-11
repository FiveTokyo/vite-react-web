/**
 * @author
 * @date 2023-04-10 14:05
 * @since 0.0.1
 */

import { Layout } from "antd";
import { memo, ReactElement } from "react";
import { useOutlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
// import classnames from 'classnames'
import styles from "./style.module.less";

const Sider = Layout.Sider;
const Content = Layout.Content;
export interface LayoutProps {
  [key: string]: any;
}

/**
interface LayoutRef {

}
*/

const BackLayout = (props: LayoutProps): ReactElement => {
  const Outlet = useOutlet();
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.contain}>
        <Layout hasSider>
          <Sider>left sidebar</Sider>
          <Content className={styles.content}>{Outlet}</Content>
        </Layout>
        {/* <div className={styles.slider}></div>
        <div className={styles.content}>{Outlet}</div> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default memo(BackLayout);
