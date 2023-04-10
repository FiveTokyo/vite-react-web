/**
 * @author
 * @date 2023-04-10 14:05
 * @since 0.0.1
 */

import { memo, ReactElement } from "react";
// import classnames from 'classnames'
import styles from "./style.module.less";

export interface HeaderProps {
  [key: string]: any;
}

/**
interface HeaderRef {

}
*/

const Header = (props: HeaderProps): ReactElement => {
  const {} = props;

  return <div className={styles.header}>Header</div>;
};

export default memo(Header);
