import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../component/ErrorPage";
import Root from "./Root";
import HomePage from "../pages/home/HomePage";
import User from '../pages/user/User';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <HomePage/>  },
                    {
                        path: "/user",
                        element: <User />
                    }
                ]
            }
        ]
    }
])