import React from "react";
import { IRoute } from "./utils";

const AboutPage = React.lazy(() => import("../pages/AboutPage"));

export const infoRoutes:IRoute[] = [
    {   
        path: "/about",
        exact: true,
        component: AboutPage,
        isPrivate: false,
    },
]