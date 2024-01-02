import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [question, setQuestion] = useState("");

  //variale for custom hook
  // useNavigate is a hook and need a var
  const navigate = useNavigate();
  // this function returns a promise that resolves after n milliseconds
  const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));
  //   form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, question }
      );
      console.log(res.data);
      if (res && res.data.success) {
        toast.success(res.data.message);
        await wait(3000);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout title={"forgot password - Ecommerce app"}>
      <div className="register form-container">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>

          <div className="mb-3">
            <input
              placeholder="your childhood friend name"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>

          <div className="mb-3">
            <input
              placeholder="enter your password"
              value={newPassword}
              onChange={(e) => {
                setnewPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
