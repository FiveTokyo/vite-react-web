/**
 * @author
 * @date 2023-04-10 14:05
 * @since 0.0.1
 */

import { Avatar, Dropdown, MenuProps } from "antd";
import { memo, ReactElement } from "react";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
// import classnames from 'classnames'
import styles from "./style.module.less";

export interface HeaderProps {
  [key: string]: any;
}

/**
interface HeaderRef {

}
*/

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a>退出登陆</a>,
  },
];

const Header = (props: HeaderProps): ReactElement => {
  const {} = props;

  return (
    <div className={styles.header}>
      <div>title</div>
      <div className={styles.userInfo}>
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          arrow
          trigger={["click"]}
        >
          <div className={styles.info}>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <div className={styles.userName}>伍东京哈</div>
            <DownOutlined className={styles.icon}/>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default memo(Header);
