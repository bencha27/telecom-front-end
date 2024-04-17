// @ts-nocheck

import { createContext, useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { loginApi, signupApi } from "../Services/AuthService";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    setIsReady(true);
  }, []);

  const signupUser = async (username, email, password) => {
    await signupApi(username, email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.data.id);

          const userObj = {
            username: res.data.username,
            email: res.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));

          setToken(res.data.id);
          setUser(userObj);
          navigate("/account");
        }
      })
      .catch((e) => console.error(e));
  };

  const loginUser = async (username, password) => {
    await loginApi(username, password)
      .then((res) => {
        console.log(res);
        if (res.data.username === username) {
          localStorage.setItem("token", res.data.id);

          const userObj = {
            username: res.data.username,
            email: res.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));

          setToken(res.data.id);
          setUser(userObj);
          navigate("/account/");
        }
      })
      .catch((e) => console.error(e));
  };

  const isLoggedIn = () => {
    return token !== null;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, token, isLoggedIn, signupUser, loginUser, logout }}>
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);