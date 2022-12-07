import React from "react";

const PhishingEmails = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center flex-col justify-center">
      <div className="max-w-7xl flex items-center py-12 justify-center w-full flex-col space-y-10">
        <div className="flex items-center justify-between w-full">
          <a href="/popups" className="text-indigo-600">
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
          Phishing Attacks
        </h1>
        <h1 className="text-2xl mt-12 font-bold tracking-tight text-gray-900 ">
          Be suspicious of unsolicited emails or messages. If you receive an
          email or message from an unknown sender, be wary of clicking on any
          links or attachments.
        </h1>
        <h1 className="text-2xl mt-12 font-bold tracking-tight text-gray-900 ">
          Don't give out personal information. If someone asks you for your
          personal information, such as your Social Security number, bank
          account details, or credit card information, be cautious. Scammers
          often try to trick people into revealing sensitive information by
          pretending to be a legitimate organization.
        </h1>
        <h1 className="text-2xl mt-12 font-bold tracking-tight text-gray-900 ">
          Look for telltale signs of a phishing attack. Some common signs of a
          phishing attack include misspelled words, poor grammar, and urgent
          language that tries to pressure you into taking action.
        </h1>
        <h1 className="text-2xl mt-12 font-bold tracking-tight text-gray-900 ">
          Check the sender's email address. Scammers often create fake email
          addresses that look similar to the ones used by legitimate
          organizations. If you're unsure about the sender's email address,
          contact the organization directly to verify the email's authenticity.
        </h1>
        <h1 className="text-2xl mt-12 font-bold tracking-tight text-gray-900 ">
          Be cautious when clicking on links. If you receive an email or message
          that contains a link, hover your cursor over the link to see the
          website's address. If the website's address looks suspicious or
          doesn't match the organization's website, don't click on it.
        </h1>
        <a
          href="/section1-questions"
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

export default PhishingEmails;
