import { useLayoutEffect, useState } from 'react'
import { useLocation, useNavigationType, useRoutes } from 'react-router-dom'
import routes from './routes';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const element = useRoutes(routes);
  const location = useLocation();
  console.log('element:', element)
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    console.log("location: ", location.pathname, navigationType);
  }, [location.pathname, navigationType]);

  return element;
}

export default App
