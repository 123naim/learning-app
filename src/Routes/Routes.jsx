import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import BasicJS from "../Tutorials/Basic Js/BasicJS";
import JsIntroduction from "../Tutorials/Basic Js/JsIntroduction/JsIntroduction";
import JsSyntax from "../Tutorials/Basic Js/JsSyntax/JsSyntax";
import JsStatement from "../Tutorials/Basic Js/JS Statement/JsStatement";
import JsVariables from "../Tutorials/Basic Js/JS Variables/JsVariables";
import JsOperators from "../Tutorials/Basic Js/JS Operetors/JsOperators";
import DataTypes from "../Tutorials/Basic Js/Data Types/DataTypes";
import JsFunction from "../Tutorials/Basic Js/JS Function/JsFunction";

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
            path: '/basicJs',
            element: <JsIntroduction></JsIntroduction>
          },
          {
            path: '/basicJs/statement',
            element: <JsStatement></JsStatement>
          },
          {
            path: '/basicJs/syntax',
            element: <JsSyntax></JsSyntax>
          },
          {
            path: '/basicJs/variables',
            element: <JsVariables></JsVariables>
          },
          {
            path: '/basicJs/operators',
            element: <JsOperators></JsOperators>
          },
          {
            path: '/basicJs/datatype',
            element: <DataTypes></DataTypes>
          },
          {
            path: '/basicJs/function',
            element: <JsFunction></JsFunction>
          },
          {
            path: '/basicJs/objectcs',
            element: <JsSyntax></JsSyntax>
          },
          {
            path: '/basicJs/array',
            element: <JsSyntax></JsSyntax>
          },
          {
            path: '/basicJs/events',
            element: <JsSyntax></JsSyntax>
          },
          {
            path: '/basicJs/stringMethods',
            element: <JsSyntax></JsSyntax>
          },
          {
            path: '/basicJs/objectMethods',
            element: <JsSyntax></JsSyntax>
          },
          {
            path: '/basicJs/date',
            element: <JsSyntax></JsSyntax>
          },
          {
            path: '/basicJs/comparison',
            element: <JsSyntax></JsSyntax>
          },
          {
            path: '/basicJs/errors',
            element: <JsSyntax></JsSyntax>
          },
          {
            path: '/basicJs/oop',
            element: <JsSyntax></JsSyntax>
          },
          {
            path: '/basicJs/debugging',
            element: <JsSyntax></JsSyntax>
          },
        ]
      }
    ]
  },
]);

export default router;