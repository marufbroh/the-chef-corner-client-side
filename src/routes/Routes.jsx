import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AccountLayout from "../layouts/AccountLayout";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/chef-details",
                element: <ChefDetails />
            },
            {
                path: "/blog",
                element: <Blog />
            },
        ]
    },
    {
        path: "/account",
        element: <AccountLayout />,
        children: [
            {
                path: "/account/login",
                element: <Login />
            },
            {
                path: "/account/register",
                element: <Register />
            },
        ]
    },
]);

export default router;
