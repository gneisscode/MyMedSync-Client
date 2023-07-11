"use client";
import React, { ChangeEvent, FC, useState } from "react";
import { FileLogo, Google, MyMedSync } from "@icons";
import Link from "next/link";
import { Button, TextField } from "@shared";

const SignUp:FC = () => {
  const redirectUri = encodeURIComponent("http://localhost:3000/dashboard");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    answer: "",
  });

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name !== "confirmPassword") {
      setFormData({ ...formData, [name]: value }); //pass all names and corresponding values except those for confirm password to formData object
    } else {
      setConfirmPassword(value);
    }
  };

  return (
    <div className="flex flex-col font-custom lg:flex-row w-[100%]">
      <div className="flex flex-col justify-between bg-white lg:w-[51%] lg:bg-gray-50">
        <div className="flex flex-col items-center justify-end lg:pt-[134px] pt-4 ">
          <div className="flex gap-2 mb-2">
            <FileLogo />
            <MyMedSync />
          </div>
          <div className="text-gray-800 hidden lg:block">
            Your health, your records, your control.
          </div>
        </div>
        <div className="hidden lg:block bg-gradient-to-r from-gray-100 to-transparent via-transparent min-h-[697px] ">
          <img
            src="/images/files.png"
            alt=""
            className=" w-full min-h-[100%]"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-screen gap-8 bg-white lg:w-[49%] ">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div>
            <h2 className="text-center text-2xl font-semibold text-stroke-900 mt-14">
              Create Account
            </h2>
            <p className="mt-3 text-center text-sm font-medium text-neutral leading-5">
              Already have an account?&nbsp;
              <span className="text-blue-600 cursor-pointer">
                <Link href="/auth/sign-in">Sign in</Link>
              </span>
            </p>
            <Link
              href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=833229578494-vlt2mcrl3ue3kj98mm3bvjbljnp5hcmt.apps.googleusercontent.com&response_type=code&scope=email%20profile&redirect_uri=${redirectUri}`}
            >
              <div className="flex mt-8 gap-4 border-solid border border-gray-300 w-[358px] sm:w-[70%] lg:w-[440px] h-12 justify-center items-center cursor-pointer">
                <Google />
                <p className="text-sm font-semibold">Sign up with Google</p>
              </div>
            </Link>

            <div className="flex justify-center items-center lg:w-[440px] gap-4 mt-[20px] mb-[18px]">
              <div className="border-b w-[121px] lg:w-[162px]"></div>
              <div className="lg:w-0.5/3 flex justify-center items-center text-xs">
                or sign in with
              </div>
              <div className="border-b  w-[121px] lg:w-[162px]"></div>
            </div>
          </div>
          <div className="sm:w-[70%] w-[358px] lg:w-[440px]">
            <form className="flex flex-col gap-[10px] lg:w-[440px] sm:w-[100%] lg:mb-[69px]">
              <TextField
                name="firstname"
                label="First Name"
                placeholder="Enter first name"
                value={formData.firstname}
                onChange={handleInputChange}
                type="text"
                required
                error={false}
                errorMessage="error message"
              />
              <TextField
                name="lastname"
                label="Last Name"
                placeholder="Enter last name"
                value={formData.lastname}
                onChange={handleInputChange}
                type="text"
                required
                error={false}
                errorMessage="error message"
              />
              <TextField
                name="email"
                label="Email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                required
                error={false}
                errorMessage="error message"
              />

              <TextField
                name="answer"
                label="Security question: What is the name of your favorite city?"
                placeholder="Enter answer"
                value={formData.answer}
                onChange={handleInputChange}
                type="text"
                required
                error={false}
                errorMessage="error message"
              />
              <TextField
                name="password"
                label="Password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                required
                error={false}
                errorMessage="error message"
                passwordIcon
              />

              <TextField
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Enter password"
                value={confirmPassword}
                onChange={handleInputChange}
                type="password"
                required
                error={false}
                errorMessage="error message"
                passwordIcon
              />
              <div className="text-sm flex items-center mt-4 mb-10">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="mr-[10.5px] self-start"
                  required
                />
                <label className="self-start mt-[-5px]">
                  By signing up, I agree to company{" "}
                  <span className="text-green-600">terms and conditions</span>{" "}
                  and <span className="text-green-600">privacy policy</span>.
                </label>
              </div>
              <Button label="Sign Up" variant="primary" loading={false} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
