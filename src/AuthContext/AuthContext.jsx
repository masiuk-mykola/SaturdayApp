import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem('users')) ?? []
  );

  const [currentUser, setCurrentUser] = useState(
    () => JSON.parse(localStorage.getItem('user')) ?? {}
  );

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  const checkUser = user => {
    return users.find(item => item.toString() === user.toString())
      ? true
      : false;
  };

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
