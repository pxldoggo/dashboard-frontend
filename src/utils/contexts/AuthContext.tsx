import axios from "axios";
import React, { ReactNode, useState } from "react";

type AuthContext = {
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};
const AuthContext = React.createContext<AuthContext>({
  isAuthenticated: false,
  isLoading: true,
  setAuthenticated: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  React.useEffect(() => {
    const initializeAuth = async () => {
      const response = await axios.get(`${process.env.API_URL}/user`, {
        withCredentials: true,
      });
      setAuthenticated(response.status === 200);
      setLoading(false);
    };
    initializeAuth();
    console.log(isAuthenticated);
  }, [isLoading, setLoading, setAuthenticated, isAuthenticated]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function useIsAuthenticated() {
  const context = useAuth();
  return context.isAuthenticated;
}
