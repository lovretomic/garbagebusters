import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import StartPage from "../pages/StartPage/StartPage";
import CitizenPageLayout from "./CitizenPageLayout";
import CitizenNotificationsPage from "../pages/CitizenNotificationsPage";
import CitizenHomePage from "../pages/CitizenHomePage";
import CitizenMapPage from "../pages/CitizenMapPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<StartPage />} />
      <Route element={<CitizenPageLayout />}>
        <Route path="home" element={<CitizenHomePage />} />
        <Route path="notifications" element={<CitizenNotificationsPage />} />
        <Route path="map" element={<CitizenMapPage />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </>,
  ),
);

export const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
