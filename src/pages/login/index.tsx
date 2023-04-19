/**
 * @author
 * @date 2023-04-08 17:11
 * @since 0.0.1
 */

import { FC, useState, useEffect } from "react";
// import classnames from 'classnames'
import { Button, QRCode } from "antd";
import styles from "./style.module.less";
import useUserInfo from "@/src/hooks/useUserInfo";
import { useMemoizedFn } from "ahooks";
import request from "@/src/api/request";

export interface LoginProps {
  [key: string]: any;
}

const Login: FC<LoginProps> = (props) => {
  // const { config } = useRequest();
  const { userInfo, updateUserInfo, setUserInfo } = useUserInfo();

  const updateUser = useMemoizedFn(async () => {
    await updateUserInfo();
  });

  const login = async () => {
    const data = await request("/api/login/index", {
      method: "POST",
      data: { username: "伍东京", password: "1234a567" },
    });
    console.log('data:', data);
  };

  return (
    <div className={styles.login}>
      <Button onClick={login}>测试登录</Button>
      <div>
        {userInfo.name} + {userInfo.id}
      </div>
    </div>
  );
};

export default Login;
