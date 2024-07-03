
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./routes/Home.jsx";
import Bag from "./routes/Bag.jsx";
import myntraStore from "./components/store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: postLoader, // Uncomment and define postLoader if needed
      },
      {
        path: "/bag",
        element: <Bag />,
        // action: createPostAction, // Uncomment and define createPostAction if needed
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
