import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(() =>
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );
  const [credit, setCredit] = useState(0);

  const googleProvider = new GoogleAuthProvider();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const loadUserData = async (authToken) => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { token: authToken },
      });

      if (data.success) {
        setCredit(data.credits || 0);
        setUser(data.user);
      } else {
        setUser(null);
        setCredit(0);
      }
    } catch (error) {
      console.log("User load error:", error);
      setUser(null);
      setCredit(0);
      toast.error("Failed to restore user session.");
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();

      sessionStorage.setItem("token", idToken);
      setToken(idToken);
      setShowLogin(false);
      toast.success("Login successful");

      await loadUserData(idToken);
      navigate("/result");
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Google sign-in failed");
    }
  };

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        { headers: { token } }
      );

      if (data.success) {
        await loadUserData(token);
        return data.resultImage;
      } else {
        toast.error(data.message);
        await loadUserData(token);
        if (data.creditBalance === 0) {
          navigate("/credit");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("rememberedEmail");
    localStorage.removeItem("rememberedPassword");
    localStorage.removeItem("remembered");

    setToken("");
    setUser(null);
    setCredit(0);
  };

  useEffect(() => {
    if (token) {
      loadUserData(token);
    } else {
      setLoading(false);
    }
  }, [token]);

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
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>
      {!loading && children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
