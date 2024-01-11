import React from "react";
const inputCss =
  " h-[72px] w-full pl-[20px] border border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] ";
const LoginSignUp = () => {
  return (
    <div className="loginsignup w-full h-[80vh] bg-[#fce3fe] pt-[100px] ">
      <div className="loginsignup-container w-[580px] h-[600px] bg-white m-auto px-[40px] py-[60px] ">
        <h1 className="mx-[20px] my-0 ">Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-[29px] mt-[30px] ">
          <input className={inputCss} type="text" />
          <input className={inputCss} type="email" />
          <input className={inputCss} type="password" />
        </div>
        <button className="w-[580px] h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-2xl font-[500] cursor-pointer ">
          Continue
        </button>
        <p className="loginsignup-login">
          ALready have an account?<span>Login here</span>{" "}
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
