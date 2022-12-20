import { createContext } from "react";

type AuthContextType = {
  authenticated?: boolean;
  setAuthenticated: (authenticated: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({
  setAuthenticated: () => {},
});
