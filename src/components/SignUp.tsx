import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faEyeSlash,
  faLock,
  faUser,
  // faEye,
  // faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  return (
    <section className="signup-sec">
      <div className="container custom">
        <div className="form-card">
          <div className="row gx-0">
            <div className="col-lg-5">
              <div className="left-col">
                <div className="header">
                  <h1 className="logo">Quizz</h1>
                </div>
                <div className="body">
                  <h2 className="title">Welcome Back!</h2>
                  <p className="text-descrip">
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <Link to="" className="primary-btn">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="right-col">
                <div className="header">
                  <h2>Create Account</h2>
                  <ul className="social-icons">
                    <li>
                      <Link className="icon" to={""}>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                    </li>
                    <li>
                      <Link className="icon" to={""}>
                        <FontAwesomeIcon icon={faGoogle} />
                      </Link>
                    </li>
                    <li>
                      <Link className="icon" to={""}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </Link>
                    </li>
                  </ul>
                  <p>Or use your email for registration</p>
                </div>
                <div className="body">
                  <form className="row gy-4">
                    <div className="col-12">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          aria-label="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          aria-label="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faLock} />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          aria-label="Password"
                          autoComplete="true"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faLock} />
                        </span>
                        <input
                          type=""
                          className="form-control last-child-input"
                          placeholder="Confirm Password"
                          aria-label="Confirm Password"
                          autoComplete="true"
                        />
                        <span className="input-group-text last-child-text">
                          <FontAwesomeIcon icon={faEyeSlash} />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="secondary-btn mt-2 mb-0">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
