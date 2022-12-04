import Image from "next/image";
import React from "react";

const Example1 = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center flex-col justify-center">
      <div className="max-w-7xl flex items-center justify-center w-full flex-col space-y-10">
        <div className="flex items-center justify-between w-full">
          <a href="/" className="text-indigo-600">
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
            Section 1:{" "}
            <span className="block text-indigo-600 xl:inline">
              {" "}
              Suspicious Material & Cyber Threats
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
          Pop Ups
        </h1>
        <h1 className="text-2xl mt-12 font-bold tracking-tight text-gray-900 ">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </h1>
        <a
          href="/phishing"
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
      {/* <div className="bg-white shadow-xl border-gray-600 border absolute top-16 left-12">
        <div className="bg-gray-600 w-full flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-white mr-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>

          <h1 className="text-white mr-auto">Message from the website</h1>
        </div>
        <div className="flex flex-col items-center justify-center pb-6 pt-3 px-16">
          <h1 className="text-2xl font-semibold mb-4">
            Hot girls in your area!
          </h1>
          <Image src="/jizzele.jpg" width={100} height={100}></Image>
          <h1 className="mb-4">Jizzele is only 3km away!</h1>
          <button className="border-gray-600 border px-2 rounded">
            Show her location
          </button>
        </div>
      </div>
      <div className="bg-white shadow-xl rounded-xl border border-red-600 absolute top-20 right-24">
        <div className="bg-red-600 w-full rounded-t-xl flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-auto stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h1 className="text-white mr-auto">System message</h1>
        </div>
        <div className="flex flex-col items-center justify-center pb-6 pt-3 px-16">
          <h1 className="text-2xl font-semibold mb-4">Warning!</h1>
          <h1 className="mb-4">Your computer may be infected!!!</h1>
          <button className="bg-red-600 text-white px-2 rounded">
            Clean system
          </button>
        </div>
      </div>
      <div className="bg-white shadow-xl border-blue-600 border absolute top-88 left-96">
        <div className="bg-blue-600 w-full flex">
          <h1 className="text-white ml-auto">Congratulations!</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-auto stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center pb-6 pt-3 px-16">
          <h1 className="text-2xl font-semibold text-red-600 mb-4">
            WINNER! WINNER! WINNER!
          </h1>

          <h1 className="mb-4">1.000.000th visitor!</h1>
          <h1 className="mb-4">You have won a free new phone!</h1>
          <button className="bg-blue-600 text-white border px-2 rounded">
            Click here to claim
          </button>
        </div>
      </div>
      <div className="bg-white shadow-xl border-red-800 border absolute top-64 right-96">
        <div className="bg-red-800 w-full flex">
          <h1 className="text-white ml-auto">Virus!</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-auto stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center pb-6 pt-3 px-16">
          <h1 className="text-2xl font-semibold text-red-600 mb-4 flex items-center">
            INFECTION!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </h1>

          <h1 className="mb-4">
            Warning user! A trojan virus has been injected into your computer!
          </h1>
          <h1 className="mb-4">You need to purge your system now!</h1>
          <button className="bg-red-800 text-white border px-2 rounded">
            PURGE SYSTEM
          </button>
        </div>
      </div>
      <div className="bg-white shadow-xl rounded-xl border border-red-400 absolute top-36 right-100">
        <div className="bg-red-400 w-full rounded-t-xl flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-auto stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h1 className="text-white mr-auto">Memory leak!</h1>
        </div>
        <div className="flex flex-col items-center justify-center pb-6 pt-3 px-16">
          <h1 className="text-2xl font-semibold mb-4">
            We have detected that your computer has a memory leak!
          </h1>
          <h1 className="mb-4">
            If not fixed soon, your computer will get reformatted.
          </h1>
          <button className="bg-red-400 text-white px-2 rounded">
            Download more RAM
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Example1;
