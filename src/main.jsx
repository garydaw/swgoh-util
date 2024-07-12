import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Units, {unitLoader} from "./routes/units";
import UnitDetails, {unitDetailsLoader} from "./routes/unitsDetails";
import Ships from "./routes/ships";
import ErrorPage from "./error-page";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/units",
        element: <Units />,
        loader: unitLoader
      },
      {
        path: "/units/:base_id",
        element: <UnitDetails />,
        loader: unitDetailsLoader
      },
      {
        path: "/ships",
        element: <Ships />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);