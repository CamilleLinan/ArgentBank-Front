import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import IndexRoutes from "./routes/Routes";
import { fetchUserProfile } from "./redux/slice/userSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
    }
  }, [token, dispatch]);

  return (
    <>
      <IndexRoutes />
    </>
  );
};

export default App;
