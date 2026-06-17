import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usersDb, setUsersDb] = useState([]); 
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = (name, email, password) => {
    const userExists = usersDb.find(u => u.email === email);
    if (userExists) {
      return { success: false, message: 'Este e-mail já está em uso.' };
    }
    const newUser = { id: Date.now(), name, email, password };
    setUsersDb([...usersDb, newUser]);
    return { success: true };
  };

  const loginUser = (email, password) => {
    const user = usersDb.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return { success: true };
    }
    return { success: false, message: 'E-mail ou senha incorretos.' };
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};