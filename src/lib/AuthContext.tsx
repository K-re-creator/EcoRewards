import { createContext, useContext, useState, ReactNode } from 'react';
import { seedUser } from './seedData';

interface AuthContextType {
  isAuthenticated: boolean;
  user: typeof seedUser | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (name: string, email: string, password: string, accountType: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<typeof seedUser | null>(null);

  const login = (email: string, password: string) => {
    // Mock login
    setIsAuthenticated(true);
    setUser(seedUser);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = (name: string, email: string, password: string, accountType: string) => {
    // Mock registration
    setIsAuthenticated(true);
    setUser({ ...seedUser, name, email });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
