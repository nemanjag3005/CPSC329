//prettier-ignore
"use client"
import { useState } from "react";

const Questions3 = () => {
  const question1 = [
    {
      id: "1",
      title:
        "Prevent malicious pop ups and ads from appearing on your computer",
    },
    { id: "2", title: "Will clean your computer of viruses" },
    { id: "3", title: "It will raise your credit score" },
    { id: "4", title: "It could make web pages load faster" },
  ];
  const question2 = [
    {
      id: "1",
      title: "Disables the parts of the computer that get infected",
    },
    {
      id: "2",
      title: "Sends you an email when you download a virus",
    },
    {
      id: "3",
      title:
        "Will monitor the files on your computer and remove malicious software",
    },
    {
      id: "4",
      title: "It will turn off your computer when a virus is detected",
    },
  ];
  const question3 = [
    {
      id: "1",
      title: "Your mother",
    },
    { id: "2", title: "https://threatpost.com" },
    { id: "3", title: "www.scientology.com" },
    { id: "4", title: "www.facebook.com" },
  ];

  const [selq2, Setselq2] = useState(1);
  const [selq1, Setselq1] = useState(1);
  const [selq3, Setselq3] = useState(1);
  const [q2response, SetQ2response] = useState(null);
  const [q1response, SetQ1response] = useState(null);
  const [q3response, SetQ3response] = useState(null);
  const checkQ2Answer = () => {
    if (selq2 == 3) {
      SetQ2response("Correct answer.");
    } else {
      SetQ2response("Incorrect answer. Try again!");
    }
  };
  const checkQ1Answer = () => {
    if (selq1 == 1 || selq1 == 4) {
      SetQ1response("Correct answer.");
    } else {
      SetQ1response("Incorrect answer. Try again!");
    }
  };
  const checkQ3Answer = () => {
    if (selq3 == 2) {
      SetQ3response("Correct answer.");
    } else {
      SetQ3response("Incorrect answer. Try again!");
    }
  };
  return (
    <div className="bg-gray-50 py-12 min-h-screen flex items-center flex-col justify-center">
      <div className="max-w-7xl flex items-center justify-center w-full flex-col ">
        <div className="flex items-center justify-between w-full">
          <a href="/adblock" className="text-indigo-600">
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
            Section 3:{" "}
            <span className="block text-indigo-600 xl:inline">
              {" "}
              Cybersecurity Tools
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
          Questions
        </h1>
        <h1 className="text-2xl mt-12 font-bold tracking-tight text-gray-900 ">
          Time to test your knowledge of this section.
        </h1>

        <h1 className="text-2xl mt-20 font-bold  tracking-tight text-indigo-600 ">
          Question 1
        </h1>
        <h1 className="text-xl mt-2 font-bold mb-2 tracking-tight text-gray-900 ">
          What are the benefits of using ad blocking software for your browser?
        </h1>

        <fieldset className="mt-4">
          <legend className="sr-only">Notification method</legend>
          <div className="space-y-4">
            {question1.map((q1) => (
              <div key={q1.id} className="flex items-center">
                <input
                  id={q1.id}
                  name="notification-method"
                  type="radio"
                  value={q1.id}
                  onClick={() => Setselq1(q1.id)}
                  defaultChecked={q1.id === "1"}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={q1.id}
                  className="ml-3 block text-text-lg font-medium text-gray-900"
                >
                  {q1.title}
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={checkQ1Answer}
            className="flex mb-2 mx-auto mt-6 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-1 text-base font-medium text-white hover:bg-indigo-700"
          >
            Submit
          </button>
          {q1response == "Correct answer." ? (
            <h1 className="ml-3 block text-text-lg font-medium text-green-600">
              {q1response}
            </h1>
          ) : q1response == "Incorrect answer. Try again!" ? (
            <h1 className="ml-3 block text-text-lg font-medium text-red-600">
              {q1response}
            </h1>
          ) : (
            <></>
          )}
        </fieldset>
        <h1 className="text-2xl mt-20 font-bold  tracking-tight text-indigo-600 ">
          Question 2
        </h1>
        <h1 className="text-xl mt-2 mb-2 font-bold tracking-tight text-gray-900 ">
          How does an antivirus protect your computer?
        </h1>
        <fieldset className="mt-4">
          <legend className="sr-only">Notification method</legend>
          <div className="space-y-4">
            {question2.map((q2) => (
              <div key={q2.id} className="flex items-center">
                <input
                  id={q2.id}
                  name="notification-method"
                  type="radio"
                  value={q2.id}
                  onClick={() => Setselq2(q2.id)}
                  defaultChecked={q2.id === "1"}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={q2.id}
                  className="ml-3 block text-text-lg font-medium text-gray-900"
                >
                  {q2.title}
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={checkQ2Answer}
            className="flex mb-2 mx-auto mt-6 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-1 text-base font-medium text-white hover:bg-indigo-700"
          >
            Submit
          </button>
          {q2response == "Correct answer." ? (
            <h1 className="ml-3 block text-text-lg font-medium text-green-600">
              {q2response}
            </h1>
          ) : q2response == "Incorrect answer. Try again!" ? (
            <h1 className="ml-3 block text-text-lg font-medium text-red-600">
              {q2response}
            </h1>
          ) : (
            <></>
          )}
        </fieldset>
        <h1 className="text-2xl mt-20 font-bold  tracking-tight text-indigo-600 ">
          Question 3
        </h1>
        <h1 className="text-xl mt-2 mb-2 font-bold tracking-tight text-gray-900 ">
          Where can you go to find the latest information on cybersecurity?
        </h1>
        <fieldset className="mt-4 mb-16">
          <legend className="sr-only">Question 3</legend>
          <div className="space-y-4">
            {question3.map((q3) => (
              <div key={q3.id} className="flex items-center">
                <input
                  id={q3.id}
                  name="notification-method"
                  type="radio"
                  onClick={() => Setselq3(q3.id)}
                  defaultChecked={q3.id === "1"}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={q3.id}
                  className="ml-3 block text-text-lg font-medium text-gray-900"
                >
                  {q3.title}
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={checkQ3Answer}
            className="flex mb-2 mx-auto mt-6 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-1 text-base font-medium text-white hover:bg-indigo-700"
          >
            Submit
          </button>
          {q3response == "Correct answer." ? (
            <h1 className="ml-3 block text-text-lg font-medium text-green-600">
              {q3response}
            </h1>
          ) : q3response == "Incorrect answer. Try again!" ? (
            <h1 className="ml-3 block text-text-lg font-medium text-red-600">
              {q3response}
            </h1>
          ) : (
            <></>
          )}
        </fieldset>

        <a
          href="/fin"
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

export default Questions3;
