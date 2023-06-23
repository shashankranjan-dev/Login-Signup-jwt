import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useLocation, useNavigate } from "react-router-dom";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/register") {
      setIsSignUp(true);
    }
    if (location.pathname === "/login") {
      setIsSignUp(false);
    }
  }, [isSignUp, location.pathname]);

  return (
    <div>
      {isSignUp ? <SignUp /> : <SignIn />}

      <div class="text-black justify-center mt-0 flex">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}

        <p
          class="ml-2 no-underline border-b border-blue text-blue-700 hover:cursor-pointer"
          onClick={
            !isSignUp ? () => navigate("/register") : () => navigate("/login")
          }
        >
          {isSignUp ? "Log in" : "Sign up"}
        </p>
      </div>
    </div>
  );
}

export default Auth;
