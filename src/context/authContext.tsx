import { createContext, useState } from "react";

interface ContextProps {
  token: string | undefined;
  isLoggedIn: boolean;
  signIn: (token: string) => void;
  logOut: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<ContextProps>({
  token: undefined,
  isLoggedIn: false,
  signIn: () => {},
  logOut: () => {},
});

export const AuthContextProvider = (props: ProviderProps) => {
  const [token, setToken] = useState<string | undefined>();

  const signInHandler = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logOutHandler = () => {
    localStorage.clear();
    setToken(undefined);
  };

  const userIsLoggedIn = !!token;

  const contextData = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    signIn: signInHandler,
    logOut: logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
