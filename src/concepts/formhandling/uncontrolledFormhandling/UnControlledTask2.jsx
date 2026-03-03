import React, { useRef } from "react";
import "./Task2.css";
import { LiaGhostSolid } from "react-icons/lia";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";

const  UnControlledTask2 = () => {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmRef = useRef(null);
  const condtionRef = useRef(null);

  const formHandle = (e) => {
    e.preventDefault();

    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmpassword = confirmRef.current.value;
    const condition = condtionRef.current.checked;

    if (!firstname) {
      firstnameRef.current.classList.add("error");
      toast.error("Firstname is required", { position: "top-center" });
      setTimeout(() => {
        firstnameRef.current.classList.remove("error");
      }, 2000);
      return;
    } else if (!lastname) {
      lastnameRef.current.style.outline = "2px solid red";
      toast.error("Lastname is required");
      setTimeout(() => {
        lastnameRef.current.style.outline = "none";
      }, 2000);
    } else if (!username) {
      usernameRef.current.style.outline = "2px solid red";
      toast.error("Lastname is required");
      setTimeout(() => {
        usernameRef.current.style.outline = "none";
      }, 2000);
      return;
    } else if (!email) {
      emailRef.current.style.outline = "2px solid red";
      toast.error("Lastname is required");
      setTimeout(() => {
        emailRef.current.style.outline = "none";
      }, 2000);
      return;
    } else if (!password) {
      passwordRef.current.style.outline = "2px solid red";
      toast.error("Lastname is required");
      setTimeout(() => {
        passwordRef.current.style.outline = "none";
      }, 2000);
      return;
    } else if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%*^]/.test(password)
    ) {
      toast.error(
        "Password must be 8 characters , contain at least one capital letter,conatin atleast one number,contain atleast one special character",
      );
      return;
    } else if (!confirmpassword) {
      confirmRef.current.style.outline = "2px solid red";
      toast.error("Lastname is required");
      setTimeout(() => {
        confirmRef.current.style.outline = "none";
      }, 2000);
      return;
    } else if (confirmpassword !== password) {
      toast.error("Invalid Password!");
    } else if (!condition) {
      toast.error("Accept the terms and condition");
    } else {
      toast.success("Successfully Submitted", { position: "top-right" });
      firstnameRef.current.value = "";
      lastnameRef.current.value = "";
      usernameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmRef.current.value = "";
      condtionRef.current.checked = false;
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              temporibus consectetur. Rem suscipit voluptate eveniet recusandae,
              sit quisquam? Incidunt voluptate vero voluptatibus praesentium
              delectus porro, distinctio tempore molestias! Error,
              exercitationem?
            </p>

            <button className="startedbutton">Get Started</button>
          </div>

          <div className="rightpart">
            <div className="headings">
              <h1>Register</h1>
              <p>Create Your Account. It's Free and only takes a minute </p>
            </div>
            <div className="forms">
              <form onSubmit={formHandle}>
                <div className="inputGroup">
                  <FaRegUser />
                  <input type="text" placeholder="FirstName" ref={firstnameRef}/>
                </div>

                <div className="inputGroup">
                  <FaRegUser />
                  <input type="text" placeholder="LastName" ref={lastnameRef} />
                </div>

                <div className="inputGroup">
                  <FaRegUserCircle />
                  <input type="text" placeholder="UserName" ref={usernameRef}/>
                </div>
                <div className="inputGroup">
                  <MdEmail />
                  <input type="email" placeholder="Email" ref={emailRef}/>
                </div>
                <div className="inputGroup">
                  <TbLockPassword />
                  <input type="password" placeholder="password" ref={passwordRef}/>
                </div>
                <div className="inputGroup">
                  <RiLockPasswordFill />
                  <input type="password" placeholder="Confirm password" ref={confirmRef} />
                </div>
                <div className="checkbox">
                  <input type="checkbox" placeholder="FirstName" ref={condtionRef}/>
                  <span> I Accept the Terms of Use and Policy </span>
                </div>
                <div className="para">
                  <p>
                    Already an account ?<a href="#">SignIn</a>
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

export default UnControlledTask2;
