import React from "react";
import { getAuth } from "@firebase/auth";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";


const Login = () => {

  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory()
  const redirect_uri = location.state?.from || '/home';

  const auth = getAuth();
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        const user = result.user;
        console.log(user)
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message));
  }



  return (
    <div>
      <h3 className="mt-5 pt-5">Sign in with your Google Account</h3>
      <p>Use Private Browsing windows to sign in here.</p>

      <div className="login-box w-25 m-auto pt-5">
        <div className="box border border d-flex justify-content-center align-items-center">

          <button onClick={handleGoogleLogin} className="btn w-75  btn-primary fw-bold ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;