import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Main;
