import React from "react";
import Register from "../authentication/Register";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const PUBLIC = [
    { link: "/register", element: <Register />, id: 1 },
    { link: "/", element: <Home />, id: 2 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
