import React from "react";
import { IRoute } from "./utils";

const BookPage = React.lazy(() => import( "../pages/BookPage"));

export const userRoutes:IRoute[] = [
    {   
        path: "/books",
        exact: true,
        component: BookPage,
        isPrivate: false,
    },
]