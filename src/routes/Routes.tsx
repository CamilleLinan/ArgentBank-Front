import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import User from "../pages/User/User";
import Layout from "../components/Shared/Layout/Layout";
import NotFound from "../pages/NotFound/NotFound";
import { useAppSelector } from "../redux/store";

const IndexRoutes: FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <User /> : <NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoutes;
