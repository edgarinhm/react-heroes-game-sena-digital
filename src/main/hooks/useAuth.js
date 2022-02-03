import { useState, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(false);

  const login = () => {
    setAuthed(true);
  };

  const logout = () => {
    setAuthed(false);
  };

  return <AuthContext.Provider value={{ authed, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
