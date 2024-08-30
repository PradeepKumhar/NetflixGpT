import Header from "./Header";
import { useState, useRef } from "react";
import { validateSignUpForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const Navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (isSignInForm) {
      if (!email || !password) {
        setErrorMessage("Please enter email and password");
      } else {
        setErrorMessage("");
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            Navigate("/browser");
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode === "auth/invalid-credential"){
              setErrorMessage("Ensure that you’ve entered the correct username or email address.");
            }
            else{
              setErrorMessage(errorMessage);
            }
            
          });
      }
    } else {
      const validateMessage = validateSignUpForm(email, password, confirmPassword);
      if (validateMessage) {
        setErrorMessage(validateMessage);
      } else {
        setErrorMessage("");
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            Navigate("/browser");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="relative h-screen w-screen flex flex-col items-center justify-center">
        <img
          className="absolute h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"
          alt="background"
        />

        <form className="relative p-8 bg-black bg-opacity-75 w-80 rounded-lg shadow-lg" onSubmit={handleFormSubmit}>
          <h2 className="text-white text-2xl mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          <input
            type="text"
            placeholder="Email address"
            ref={emailRef}
            className="p-3 mb-4 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            className="p-3 mb-4 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {!isSignInForm && (
            <input
              type="password"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              className="p-3 mb-4 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}
          {errorMessage && (
            <p className="text-red-600 text-sm mb-4 text-center">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            className="p-3 w-full bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-gray-400 mt-4 text-sm text-center">
            {isSignInForm ? (
              <>
                New to Netflix-gpt?{" "}
                <a
                  href="#"
                  className="text-white hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign up now.
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-white hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign in here.
                </a>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
