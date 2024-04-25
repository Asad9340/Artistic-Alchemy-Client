import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Error from '../Pages/Error/Error';
import Homepage from '../Pages/Home/Homepage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element:<Homepage/>
      }
    ]
  },
]);

export default router;