import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import RecentVideos from "../pages/recentvideos";
import VideoPage from "../pages/videopage";
import Layout from "../pages/layout";
import ErrorPage from "../pages/errorpage";


export const LAYOUT = "/";
export const ERROR = "*";
export const HOME = "/";
export const LOGIN = "/login";
export const RECENT = "/files";
export const VIDEOPAGE = "/files/:title";

export const router = createBrowserRouter([
  {
    path: LAYOUT,
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: RECENT,
        element: <RecentVideos />,
      },
      {
        path: VIDEOPAGE,
        element: <VideoPage />,
      },
    ]
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: ERROR,
    element: <ErrorPage />,
  },
]);
