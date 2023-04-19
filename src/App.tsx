/*
 * @Author: 伍东京 15211420607@163.com
 * @Date: 2023-04-13 09:32:02
 * @LastEditors: 伍东京 15211420607@163.com
 * @LastEditTime: 2023-04-18 17:13:02
 * @FilePath: /vite-react-web/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useLayoutEffect, useState } from 'react'
import { useLocation, useNavigationType, useRoutes } from 'react-router-dom'
import routes from './routes';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const element = useRoutes(routes);
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    console.log("location: ", location.pathname, navigationType);
  }, [location.pathname, navigationType]);

  return element;
}

export default App
