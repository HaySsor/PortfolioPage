import { createBrowserRouter } from "react-router";
import { App } from "../App";
import { Main } from "../views/main/Main";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children:[
        {
            index: true,
            element: <Main />
        }
      ]
    },
  ]);