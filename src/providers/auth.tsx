import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageUser, IUser } from '../services/async-storage';

interface IAuth {
  user?: IUser;
  setUser?: (user: IUser) => void;
}

const AuthContext = createContext<IAuth>({});

interface IProps {
  children: React.ReactNode;
}

export const AuthProvider = (props: IProps) => {
  const [user, setUser] = useState<IUser>();

  const getUserByStorage = async () => {
    const userStorage = await getStorageUser();
    if (userStorage) {
      setUser(userStorage);
    }
  };

  useEffect(() => {
    getUserByStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
