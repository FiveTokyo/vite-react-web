/**
 * @author
 * @date 2023-04-10 14:05
 * @since 0.0.1
 */

import { memo, ReactElement } from "react";
import { useOutlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
// import classnames from 'classnames'
import styles from "./style.module.less";

export interface LayoutProps {
  [key: string]: any;
}

/**
interface LayoutRef {

}
*/

const Layout = (props: LayoutProps): ReactElement => {
  const Outlet = useOutlet();
  return (
    <div className={styles.layout}>
      <Header />
      <main>{Outlet}</main>
      <Footer />
    </div>
  );
};

export default memo(Layout);
