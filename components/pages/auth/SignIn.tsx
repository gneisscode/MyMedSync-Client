"use client";
import React, { ChangeEvent, FC, useState } from "react";
import { AuthLayout } from "@layouts";
import { TextField } from "@shared";
import Link from "next/link";
import { Google } from "@icons";


const SignIn: FC = () => {
  const redirectUri = encodeURIComponent("http://localhost:3000/dashboard");
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn(!isOn);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <AuthLayout title="Sign In" loading={false}>
      <div className="flex flex-col w-[440px]">
        <div className="flex flex-col">
          <h2 className="text-center text-2xl font-semibold text-stroke-900">
            Sign in to continue
          </h2>
          <p className="mt-3 text-center text-sm font-medium text-neutral leading-5">
            Don't have an account?&nbsp;
            <span className="text-blue-600 cursor-pointer">
              <Link href="/auth/sign-up">Sign up</Link>
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <Link
            href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=833229578494-vlt2mcrl3ue3kj98mm3bvjbljnp5hcmt.apps.googleusercontent.com&response_type=code&scope=email%20profile&redirect_uri=${redirectUri}`}
          >
            <div className="flex mt-8 gap-4 border-solid border border-gray-300 w-[358px] sm:w-[70%] lg:w-[440px] h-12 justify-center items-center cursor-pointer">
              <Google />
              <p className="text-sm font-semibold">Sign in with Google</p>
            </div>
          </Link>

          <div className="flex justify-center items-center lg:w-[440px] gap-4 mt-[20px] mb-[18px]">
            <div className="border-b w-[121px] sm:w-[162px]"></div>
            <div className=" w-[84px] sm:w-0.5/3 flex justify-center items-center text-xs">
              or sign in with
            </div>
            <div className="border-b w-[121px] sm:w-[162px]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
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
        </div>

        <div className="flex lg:w-[440px] items-center justify-between">
          <div className="flex items-center justify-center gap-[10.91px] mt-2">
            <div
              className={`relative inline-block w-[32px] h-[17px] rounded-full border border-gray-200 bg-white cursor-pointer ${
                isOn ? " bg-gray-400" : ""
              }`}
              onClick={handleClick}
            >
              <div
                className={`absolute left-0 top-0 w-[11.64px] h-[11.33px] mt-[2px] ml-1 rounded-full bg-gray-200 transition ${
                  isOn ? "transform translate-x-full bg-gray-700" : ""
                }`}
              ></div>
            </div>
            <div className="text-gray-800 text-sm font-medium h-[21px]">
              Keep me signed in
            </div>
          </div>
          <div className="text-green-600 text-sm font-medium cursor-pointer h-[21px] mt-1.5">
            Forgot Password?
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
