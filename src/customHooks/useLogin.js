import { useState, useCallback } from "react";
import axios from "../utils/axios";

const useLogin = () => {
  const [result, setResult] = useState({
    loading: false,
    data: null,
  });

  const login = useCallback(async ({ name, password }) => {
    try {
      setResult((prevState) => ({ ...prevState, loading: true }));
      const response = await axios.post("/auth/login", { name, password });
      setResult((prevState) => ({
        ...prevState,
        loading: false,
        data: response.data,
      }));
    } catch (e) {
      console.log("--- login error", e);
      setResult((prevState) => ({ ...prevState, loading: false }));
    }
  }, []);

  return [result, login];
};

export default useLogin;
