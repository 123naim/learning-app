import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import BasicJS from "../Tutorials/Basic Js/BasicJS";
import JsIntroduction from "../Tutorials/Basic Js/JsIntroduction/JsIntroduction";
import JsSyntax from "../Tutorials/Basic Js/JsSyntax/JsSyntax";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/basicJs',
          element: <BasicJS></BasicJS>,
          children: [
            {
              path: '/basicJs/jsIntroduction',
              element: <JsIntroduction></JsIntroduction>
            },
            {
              path: '/basicJs/syntax',
              element: <JsSyntax></JsSyntax>
            }
          ]
        }
      ]
    },
  ]);

  export default router;