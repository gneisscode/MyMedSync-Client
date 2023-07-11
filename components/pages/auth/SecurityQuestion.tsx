"use client";
import React, { ChangeEvent, FC, useState } from "react";
import { Select } from "@icons";
import { AuthLayout } from "@layouts";
import { TextField } from "@shared";


interface optionsType {
  value: string;
  label: string;
  disabled?: boolean;
}

const SecurityQuestion: FC = () => {
  const [formData, setFormData] = useState({
    answer: "",
    email: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const options: optionsType[] = [
    { value: "", label: "Select an option", disabled: true },
    { value: "option1", label: "What is the name of your favorite city?" },
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <AuthLayout title="Submit" loading={false}>
      <div>
        <div className="flex flex-col w-[440px]">
          <h2 className="text-center text-2xl font-semibold text-stroke-900">
            Security Question
          </h2>
          <p className="mt-6 text-center text-sm font-normal text-neutral leading-5 lg:w-[440px]">
            Kindly select a question and provide an answer for security purposes
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="question"
              className="text-gray-800 text-sm font-normal"
            >
              Question
            </label>

            <div className="relative inline-block w-[100%]">
              <select
                name="question"
                id="question"
                className={`block appearance-none w-full px-4 py-2 cursor-pointer border border-gray-300 rounded-md focus:outline-none  sm:text-sm className={
                          ${
                            selectedOption === ""
                              ? "text-gray-400"
                              : "text-gray-800"
                          }
                        }`}
                value={selectedOption}
                onChange={handleOptionChange}
                required
              >
                {options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={
                      option.value === "" ? "text-gray-400" : "text-gray-800"
                    }
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Select />
              </div>
            </div>
          </div>

          <TextField
            name="answer"
            label="Answer"
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
        </div>
      </div>
    </AuthLayout>
  );
};

export default SecurityQuestion;
