import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Shared/Layout/Layout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import Profile from "../pages/Profile/Profile";
import Account from "../pages/UserAccount/UserAccount";
import Unauthorized from "../pages/Unauthorized/Unauthorized";
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
            element={isLoggedIn ? <Profile /> : <Unauthorized />}
          />
          <Route
            path="/account/:id"
            element={isLoggedIn ? <Account /> : <Unauthorized />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoutes;
