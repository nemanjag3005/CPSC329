import React from "react";

const AdBlock = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center flex-col justify-center">
      <div className="max-w-7xl py-12 flex items-center justify-center w-full flex-col space-y-10">
        <div className="flex items-center justify-between w-full">
          <a href="/password-strength" className="text-indigo-600">
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
          Adblockers
        </h1>

        <h1 className="text-2xl mt-12 font-bold tracking-tight text-gray-900 ">
          There are a few different resources we can use to maintain good
          cybersecurity practices. One of these resources is Ad blocker
          softwares. Ad blockers are software programs that prevent
          advertisements from being displayed on websites. These programs are
          typically used by internet users who want to avoid seeing ads while
          browsing the web. Ad blockers work by blocking or hiding elements on a
          web page that are typically used to display ads, such as banner ads,
          pop-up ads, or video ads, some of which may be malicious. This can
          make web pages load faster and improve the user experience by reducing
          the amount of clutter and distractions on the page.
        </h1>
        <h1 className="text-4xl mt-12 font-bold tracking-tight text-gray-900 ">
          Antivirus Software
        </h1>
        <h1 className="text-2xl mt-12 font-bold tracking-tight text-gray-900 ">
          Antivirus software is another useful resource to maintain good
          cybersecurity practices. Antivirus software is a program or set of
          programs that are designed to prevent, detect, and remove malware
          infections on individual computers, networks, or other devices.
          Antivirus software typically works by scanning a computer or device
          for known types of malware, such as viruses, worms, and ransomware,
          and then removing any threats that are found. It can also monitor a
          computer or device for suspicious activity that may indicate the
          presence of malware, and block or remove any threats that are
          detected.
        </h1>

        <a
          href="/section3-questions"
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

export default AdBlock;
