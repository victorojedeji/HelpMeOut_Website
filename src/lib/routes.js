import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import RecentVideos from "../pages/recentvideos";
import VideoPage from "../pages/videopage";
import Layout from "../pages/layout";

export const LAYOUT = "/";
export const HOME = "/";
export const LOGIN = "/login";
export const RECENT = "/recent-videos";
export const VIDEOPAGE = "/recent-videos/:title";

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
        path: LOGIN,
        element: <Login />,
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
  
]);
