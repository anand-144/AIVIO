import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const [token, setToken] = useState(localStorage.getItem('token'))

  const [credit , setCredit] = useState(false)

  const googleProvider = new GoogleAuthProvider();

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error) {
      console.error("Google sign-in error:", error);
      throw error;
    }
  };

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    signInWithGoogle,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit
  };

  return (
    <AppContext.Provider value={value}>
      {!loading && children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
