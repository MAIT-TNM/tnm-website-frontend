import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Layout from "./Layout";
import Background from "./components/Background";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Events from "./Events/Events";
import Gallery from "./Gallery/Gallery";
import Faculty from "./Faculty/Faculty";
import Schedule from "./Schedule/Schedule";
import Contact from "./Contact/Contact";
import Description from "./Events/Description";
import { DataContext } from "../src/context";
import { URLS } from "./url";
import Register from "./Register/Register";

const MainLayout = () => (
  <Layout>
    <Navbar />
    <Background>
      <Outlet />
    </Background>
  </Layout>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/faculty", element: <Faculty /> },
      { path: "/schedule", element: <Schedule /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/events",
        element: <Events />,
      },
      { path: ":event", element: <Description /> },
      { path: ":event/register", element: <Register /> },
    ],
  },
]);

const AppProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState();

  useEffect(() => {
    fetch(`${URLS.server}/test/`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data);
      });
  }, []);

  return (
    <DataContext.Provider value={{ eventsData }}>
      {children}
    </DataContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppProvider>
  </React.StrictMode>
);
