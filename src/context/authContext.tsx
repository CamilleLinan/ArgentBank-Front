import { createContext, useState } from "react";

interface ContextProps {
  token: string | undefined;
  isLoggedIn: boolean;
  signIn: (token: string) => void;
  signOut: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<ContextProps>({
  token: undefined,
  isLoggedIn: false,
  signIn: () => {},
  signOut: () => {},
});

export const AuthContextProvider = (props: ProviderProps) => {
  const [token, setToken] = useState<string | undefined>();

  const signInHandler = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const signOutHandler = () => {
    localStorage.clear();
    setToken(undefined);
  };

  const userIsLoggedIn = !!token;

  const contextData = {
    token: token,
    isLoggedIn: userIsLoggedIn,
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
