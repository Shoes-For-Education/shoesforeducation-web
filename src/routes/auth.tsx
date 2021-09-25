import React from "react";
import { IRoute } from "./utils";

const SignUpPage = React.lazy(() => import( "../pages/SignUpPage"));
const LoginPage = React.lazy(() => import("../pages/LoginPage"));

export const authRoutes:IRoute[] = [
    {   
        path: "/login",
        exact: true,
        component: LoginPage,
        isPrivate: false,
    },
    {
        path: "/signup",
        exact: true,
        component: SignUpPage,
        isPrivate: false,
    }
]