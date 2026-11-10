import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import StartPage from "../pages/StartPage/StartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<StartPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </>,
  ),
);

export const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
