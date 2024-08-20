import { IRoute } from "./types";
import { lazy } from "react";

const HomePage = lazy(() => import("@/presentation/pages/home"));

export const HomeRoutes: IRoute[] = [
  {
    path: "/",
    key: "home",
    component: <HomePage />,
  },
];
