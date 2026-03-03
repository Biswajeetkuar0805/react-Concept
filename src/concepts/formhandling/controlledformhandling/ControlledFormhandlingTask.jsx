import React from "react";
import { useState } from "react";
import { LiaGhostSolid } from "react-icons/lia";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "./cotrolledTask.css";

const ControlledFormhandlingTask = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    condition: false,
  });

  const formHandle = (e) => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      username,
      email,
      password,
      confirmpassword,
      condition,
    } = formData;

    if (!firstname) {
      toast.error("Firstname is required", { position: "top-center" });
      return;
    } else if (!lastname) {
      toast.error("Lastname is required");
      return;
    } else if (!username) {
      toast.error("Username is required");
      return;
    } else if (!email) {
      toast.error("Email is required");
      return;
    } else if (!password) {
      toast.error("Password is required");
      return;
    } else if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%*^]/.test(password)
    ) {
      toast.error(
        "Password must be 8 characters, contain capital, small, number & special character",
      );
      return;
    } else if (!confirmpassword) {
      toast.error("Confirm password is required");
      return;
    } else if (confirmpassword !== password) {
      toast.error("Invalid Password!");
      return;
    } else if (!condition) {
      toast.error("Accept the terms and condition");
      return;
    } else {
      toast.success("Successfully Submitted", { position: "top-right" });
    }

    const userInformation = {
      firstname,
      lastname,
      username,
      email,
      password,
      confirmpassword,
    };

    localStorage.setItem("details", JSON.stringify(userInformation));
    console.log(userInformation);

    setFormData({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      condition: false,
    });
  };

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <div className="parent">
        <div className="registration">
          <div className="leftpart">
            <div className="lefticon">
              <LiaGhostSolid size={200} />
              <h2 style={{ fontFamily: "cursive" }}>Romanchat</h2>
            </div>

            <p style={{ color: "white", letterSpacing: "1px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <button className="startedbutton">Get Started</button>
          </div>

          <div className="rightpart">
            <div className="headings">
              <h1>Register</h1>
              <p>Create Your Account. It's Free and only takes a minute</p>
            </div>

            <div className="forms">
              <form onSubmit={formHandle}>
                <div className="inputGroup">
                  <FaRegUser />
                  <input
                    type="text"
                    placeholder="FirstName"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInput}
                  />
                </div>

                <div className="inputGroup">
                  <FaRegUser />
                  <input
                    type="text"
                    placeholder="LastName"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInput}
                  />
                </div>

                <div className="inputGroup">
                  <FaRegUserCircle />
                  <input
                    type="text"
                    placeholder="UserName"
                    name="username"
                    value={formData.username}
                    onChange={handleInput}
                  />
                </div>

                <div className="inputGroup">
                  <MdEmail />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                  />
                </div>

                <div className="inputGroup">
                  <TbLockPassword />
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInput}
                  />
                </div>

                <div className="inputGroup">
                  <RiLockPasswordFill />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleInput}
                  />
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="condition"
                    checked={formData.condition}
                    onChange={handleInput}
                  />
                  <span>I Accept the Terms of Use and Policy</span>
                </div>

                <div className="para">
                  <p>
                    Already an account ? <a href="#">SignIn</a>
                  </p>
                  <button>SIGN UP</button>
                </div>
              </form>

              <div className="circles">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlledFormhandlingTask;
