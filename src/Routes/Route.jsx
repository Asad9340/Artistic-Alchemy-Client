import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Error from '../Pages/Error/Error';
import Homepage from '../Pages/Home/Homepage';
import SignIn from '../Pages/SignIn/SignIn';
import Signup from '../Pages/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import Details from '../components/Details/Details';
import AllArtCraft from '../components/AllArtCraft/AllArtCraft';
import AddCraft from '../components/AddCraft/AddCraft';
import MyArtCraft from '../components/MyArtCraft/MyArtCraft';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element:<Homepage/>
      },
      {
        path: '/signin',
        element:<SignIn/>
      },
      {
        path: '/signup',
        element:<Signup/>
      },
      {
        path: '/details',
        element: <PrivateRoute>
          <Details/>
        </PrivateRoute>
      },
      {
        path: '/allArtCraft',
        element:<AllArtCraft/>,
      },
      {
        path: '/addCraft',
        element: <PrivateRoute>
          <AddCraft/>
        </PrivateRoute>
      },
      {
        path: '/myArtCraft',
        element: <PrivateRoute>
          <MyArtCraft/>
        </PrivateRoute>
      },
    ]
  },
]);

export default router;