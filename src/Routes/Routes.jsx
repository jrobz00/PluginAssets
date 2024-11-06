import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminLogin from "../Pages/Admin/AdminLogin/AdminLogin";
import DeveloperDashboard from "../Pages/Developer/DeveloperDashboard/DeveloperDashboard";
import Checkout from "../Pages/Checkout/Checkout";
import AdminDashboard from "../Pages/Admin/AdminDashboard/AdminDashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/admin_login',
                element: <AdminLogin />
            },
            {
                path: '/admin',
                element: <AdminDashboard />
            },
            {
                path: '/developer',
                element: <DeveloperDashboard />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
        ]
    },
]);