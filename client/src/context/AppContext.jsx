import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";

import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const [token, setToken] = useState(localStorage.getItem('token'))

  const [credit , setCredit] = useState(false)

  const googleProvider = new GoogleAuthProvider();

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const loadCreditData = async () => {
    try {
      const  {data}  =  await axios.get(backendUrl + '/api/user/credits' , {headers: {token}})

      if(data.success){
        setCredit(data.credits)
        setUser(data.user)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

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

  const logout = () =>{
    localStorage.removeItem('token');
    setToken('')
    setUser(null)
  }

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if(token){
      loadCreditData()
    }
  }, [token])

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
    setCredit,
    loadCreditData,
    logout
  };

  return (
    <AppContext.Provider value={value}>
      {!loading && children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
