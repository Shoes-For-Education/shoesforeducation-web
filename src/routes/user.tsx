import React from "react";
import { IRoute } from "./utils";
import ShoeRequests from "../pages/ShoeRequests";

const BookPage = React.lazy(() => import( "../pages/BookPage"));
const RequestShoes = React.lazy(() => import("../pages/RequestShoes"));

export const userRoutes:IRoute[] = [
    {   
        path: "/books",
        exact: true,
        component: BookPage,
        isPrivate: false,
    },
    {
        path: "/request-shoes",
        component: RequestShoes,
        exact: true,
        isPrivate: true,
    },
    {
        path: "/requests",
        component: ShoeRequests,
        exact: true,
        isPrivate: true,
    }
]