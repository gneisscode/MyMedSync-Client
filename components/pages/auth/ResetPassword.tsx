"use client";
import { AuthLayout } from "@layouts";
import { TextField } from "@shared";
import React, { ChangeEvent, FC, useState } from "react";


const ResetPassword: FC = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    answer: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name !== "confirmPassword") {
      setFormData({ ...formData, [name]: value }); //pass all names and corresponding values except those for confirm password to formData object
    } else {
      setConfirmPassword(value);
    }
  };

  return (
    <AuthLayout title="Reset Password" loading={false}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md lg:w-[440px]">
        <h2 className="text-center text-2xl font-semibold text-stroke-900">
          Reset Password
        </h2>
        <p className="mt-3 text-center text-sm font-medium text-neutral leading-5">
          Kindly provide an answer to your security question to reset password
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-12">
        <TextField
          name="answer"
          label="Security Question: What is the name of your favorite city?"
          placeholder="Enter answer"
          value={formData.answer}
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
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
