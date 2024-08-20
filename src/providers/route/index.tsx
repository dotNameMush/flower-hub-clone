import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { IRoute } from "./types";
import { HomeRoutes } from "./HomeRoutes";
import PageLoading from "@/components/ui/page_loading";

const NotAuthorized = lazy(() => import("@/presentation/exceptions/403"));
const NotFound = lazy(() => import("@/presentation/exceptions/Notfound"));

const HomeLayout = lazy(() => import("@/presentation/layouts/home"));

const MainRoutes: FC = () => {
  const routes: IRoute[] = [
    {
      path: "/403",
      key: "not_authorized",
      component: <NotAuthorized />,
    },
    {
      path: "/",
      key: "home",
      component: <HomeLayout />,
      children: HomeRoutes,
    },
  ];
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.key}
          path={route.path}
          element={
            <Suspense fallback={<PageLoading />}>{route.component}</Suspense>
          }
        >
          {route?.children?.map((item) => {
            return (
              <Route
                key={item.key}
                path={item.path}
                element={
                  <Suspense fallback={<PageLoading />}>
                    {item.component}
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      ))}
      <Route
        key={"not_found"}
        path="*"
        element={
          <Suspense fallback={<PageLoading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
