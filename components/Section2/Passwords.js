//prettier-ignore
"use client"
import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

const Passwords = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen flex items-center flex-col justify-center">
      <div className="max-w-7xl flex items-center justify-center w-full flex-col space-y-10">
        <div className="flex items-center justify-between w-full">
          <a href="/section1-questions" className="text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </a>
          <h1 className="text-4xl font-bold tracking-tight ml-auto mr-auto text-gray-900 sm:text-5xl ">
            Section 2:{" "}
            <span className="block text-indigo-600 xl:inline">
              {" "}
              Password Security
            </span>
          </h1>
          <a
            href="/"
            className="flex items-center justify-center rounded-xl border p-2 border-transparent bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        </div>
        <h1 className="text-4xl mt-12 font-bold tracking-tight text-gray-900 ">
          Password strength
        </h1>

        <h1 className="text-2xl mt-12 font-bold tracking-tight text-gray-900 ">
          Here we have a simple password tester, it will evaluate a password you
          input to see if it is strong or not. Play around to see what makes a
          password strong.
        </h1>
        <div>
          <label
            htmlFor="password"
            className="block text-md font-medium text-gray-900"
          >
            Strength meter
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="password"
              id="password"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Your password"
            />
            <PasswordStrengthBar
              password={inputValue}
              minLength={5}
              onChangeScore={(score, feedback) => {
                console.log(score, feedback);
              }}
            />
          </div>
        </div>

        <a
          href="/password-leaks"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
        >
          Continue{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" ml-2 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Passwords;
