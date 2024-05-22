import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import User from "../pages/User/User";
import Layout from "../components/Shared/Layout/Layout";

const IndexRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoutes;
