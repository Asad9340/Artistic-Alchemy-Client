import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Error from '../Pages/Error/Error';
import Homepage from '../Pages/Home/Homepage';
import SignIn from '../Pages/SignIn/SignIn';
import Signup from '../Pages/Signup/Signup';
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
    ]
  },
]);

export default router;