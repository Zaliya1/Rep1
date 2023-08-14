import News from "../pages/News";
import { useRoutes } from 'react-router-dom'

const Router = () => {
  const routes = useRoutes([{ path: '', element: <News /> }])

  return routes
}

export default Router
