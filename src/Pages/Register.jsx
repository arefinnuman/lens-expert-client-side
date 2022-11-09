import React, { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/UserContext";

const Register = () => {
  const {
    createUser,
    updateUserProfile,
    signInWithGoogle,
    signInWithGithub,
    setLoader,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleEmail = (event) => {
    const email = event.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, emailError: "Please provide a valid Email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setErrors({ ...errors, emailError: "" });
      setUserInfo({ ...userInfo, email: event.target.value });
    }
  };

  const handlePassword = (event) => {
    const password = event.target.value;

    const lengthError = password.length < 6;
    const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
    const noCapitalLetterError = !/[A-Z]{1,}/.test(password);

    if (lengthError) {
      setErrors({ ...errors, passwordError: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    } else if (noSymbolError) {
      setErrors({
        ...errors,
        passwordError: "Must be at least One Symbol Letter",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (noCapitalLetterError) {
      setErrors({
        ...errors,
        passwordError: "Must be at least one Capital Letter",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setErrors({ ...errors, passwordError: "" });
      setUserInfo({ ...userInfo, password: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        console.log(result.user);
        setError("");
        form.reset();
        navigate(from, { replace: true });
        handleUpdateUserProfile(name, photoURL);
        Swal.fire("Account Created Successfully!", "success");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => setLoader(false));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex-col lg:flex-col-">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Register now!</h1>
          <p className="py-6 text-center">
            Join Creative live for free. Create a profile to get a personalized
            learning experience with course recommendations.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                name="photoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={handleEmail}
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            {errors.emailError && (
              <p className="text-error">{errors.emailError}</p>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={handlePassword}
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              {errors.passwordError && (
                <p className="text-error">{errors.passwordError}</p>
              )}
              <label className="label">
                <p>
                  Have an Account ?{" "}
                  <Link className="text-info" to="/login">
                    Login
                  </Link>{" "}
                  now
                </p>
              </label>
            </div>
            <section className="divide-y divide-neutral ">
              <p className="text-center text-sm p-2">
                Sign up with Social Accounts
              </p>
              <div className="flex justify-around items-center pt-3">
                <Link onClick={handleGithubSignIn}>
                  <FaGithub />
                </Link>
                <Link onClick={handleGoogleSignIn}>
                  <FaGoogle />
                </Link>
                <Link>
                  <FaFacebook />
                </Link>
              </div>
            </section>
            {error && <p className="text-error">{error}</p>}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
