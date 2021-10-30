import React from "react";
// import "./Login.css";
// import useFirebase from "./../../Hook/useFirebase";

const Login = () => {
  // const { handleGoogleLogin } = useFirebase();
  // console.log(handleGoogleLogin());

  return (
    <div>
      <h3 className="mt-5 pt-5">Sign in with your Google Account</h3>
      <p>Use Private Browsing windows to sign in here.</p>

      <div className="login-box w-25 m-auto pt-5">
        <div className="box border border d-flex justify-content-center align-items-center">
          <button className="btn w-75  btn-primary fw-bold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;