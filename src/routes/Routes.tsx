import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";

const IndexRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoutes;
