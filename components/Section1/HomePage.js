import React from "react";
const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center flex-col justify-center">
      <div className="max-w-7xl flex items-center justify-center flex-col space-y-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
          <span className="block text-indigo-600 xl:inline">Cybersecurity</span>{" "}
          issues are becoming a daily threat to businesses and even individuals.
          You can start to prepare yourself by staying up-to-date on the latest
          statistics and facts with our online teaching tool.
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
          The cybersecurity landscape is constantly changing, but what is
          obvious is that{" "}
          <span className="block text-indigo-600 xl:inline">cyber threats</span>{" "}
          are becoming more serious, and they’re happening with more frequency.
          Here is a summary of some of the most interesting, and alarming
          information that you need to gain better knowledge on.
        </h1>
        <a
          href="/popups"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
        >
          Take the interactive test{" "}
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

export default HomePage;
