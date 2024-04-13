import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";
import Users from "./pages/Users";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/settings",
                element: <Settings/>
            },
            {
                path: "/admin",
                element: <Admin/>
            },
            {
                path: "/users",
                element: <Users/>
            },
            {
                path: "*",
                element: "Page Not Found"
            }
        ]
    }
]) 
     
export default router;