import { Navigate, useRoutes } from 'react-router-dom';
import DefaultNavbar from "./layouts/Index";
import  Destination from "./layouts/Destination";
import NotFound from "./layouts/NotFound";
import Corridors from "./corridors/Corridors";


const Routes = () => {
    return useRoutes([
      {path: '/',
        element: <DefaultNavbar/>,
        children: [
            { path: '', element: <Corridors/> },
        ]
      },
      {path: '/destinations', element: <Destination/>},
      {path: '/404', element: <NotFound/>},
      {path:'*', element: <Navigate to="/404" replace/>},
      {path:'/login', element: <Navigate to="/404" replace/>}
    ])
}

export default Routes;