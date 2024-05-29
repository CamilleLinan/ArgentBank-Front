import { createContext, useCallback, useEffect, useState } from "react";
import { User } from "../models/user.model";
import userService from "../services/user.service";

interface ContextProps {
  token: string | undefined;
  isLoggedIn: boolean;
  userData?: User;
  signIn: (token: string) => void;
  signOut: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<ContextProps>({
  token: undefined,
  isLoggedIn: false,
  userData: undefined,
  signIn: () => {},
  signOut: () => {},
});

export const AuthContextProvider = (props: ProviderProps) => {
  const [token, setToken] = useState<string | undefined>();
  const [userData, setUserData] = useState<User | undefined>();

  const fetchUserProfile = useCallback(async (token: string) => {
    if (token) {
      const response = await userService.getUserProfile();
      if (response.success && response.data) {
        setUserData(response.data);
      } else {
        console.log("error fetch", response.error);
      }
    }
  }, []);

  const signInHandler = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
    fetchUserProfile(token);
  };

  const signOutHandler = () => {
    localStorage.clear();
    setToken(undefined);
    setUserData(undefined);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUserProfile(storedToken);
    }
  }, [fetchUserProfile]);

  const userIsLoggedIn = !!token;

  const contextData = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userData: userData,
    signIn: signInHandler,
    signOut: signOutHandler,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
