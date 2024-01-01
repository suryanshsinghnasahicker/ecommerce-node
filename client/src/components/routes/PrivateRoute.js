import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
// const myHost = import.meta.env.VITE_REACT_APP_API;

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/user-auth`
        //this is temp work done for this , gotta fix it properly with env varibale ,  gotta lookup how to use env var in private route
      );
      //this is alternative method for headers
      //   , {
      //     headers: {
      //       Authorization: auth?.token,
      //     },
      //   }
      console.log();
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
