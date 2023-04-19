/**
 * @author
 * @date 2023-04-10 14:05
 * @since 0.0.1
 */

import { Input, Layout } from "antd";
import { memo, ReactElement } from "react";
import { useOutlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
// import classnames from 'classnames'
import styles from "./style.module.less";
import { ProLayout } from "@ant-design/pro-components";

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
  return <ProLayout>{Outlet}</ProLayout>;
};

export default memo(BackLayout);
