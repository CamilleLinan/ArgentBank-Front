import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import IndexRoutes from "./routes/Routes";
import { fetchUserProfile } from "./redux/authSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const tokenLocalStorage = localStorage.getItem("token");

  useEffect(() => {
    if (tokenLocalStorage) {
      dispatch(fetchUserProfile());
    }
  }, [token, tokenLocalStorage, dispatch]);

  return (
    <>
      <IndexRoutes />
    </>
  );
};

export default App;
