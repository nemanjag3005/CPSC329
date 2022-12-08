import React from "react";
import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
  ExclamationCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
  DocumentArrowDownIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/20/solid";

const timeline = [
  {
    id: 1,
    content: "Section 1",
    target: "Pop-ups",
    href: "/popups",
    date: "Suspicious Material & Cyber Threats",
    datetime: "2020-09-20",
    icon: ExclamationCircleIcon,
    iconBackground: "bg-blue-600",
  },
  {
    id: 2,
    content: "Section 1",
    target: "Phishing",
    href: "/phishing",
    date: "Suspicious Material & Cyber Threats",
    datetime: "2020-09-22",
    icon: EnvelopeIcon,
    iconBackground: "bg-blue-600",
  },
  {
    id: 3,
    content: "Section 1",
    target: "Questions",
    href: "/section1-questions",
    date: "Suspicious Material & Cyber Threats",
    datetime: "2020-09-22",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Section 2",
    target: "Password Strength",
    href: "/password-strength",
    date: "Password Security",
    datetime: "2020-09-28",
    icon: LockClosedIcon,
    iconBackground: "bg-blue-600",
  },
  {
    id: 5,
    content: "Section 2",
    target: "Password Leaks",
    href: "/password-leaks",
    date: "Password Security",
    datetime: "2020-09-30",
    icon: DocumentArrowDownIcon,
    iconBackground: "bg-blue-600",
  },
  {
    id: 6,
    content: "Section 2",
    target: "Questions",
    href: "/section2-questions",
    date: "Password Security",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 7,
    content: "Section 3",
    target: "Ablock & Antivirus Software",
    href: "/adblock",
    date: "Cybersecurity Tools",
    datetime: "2020-09-30",
    icon: ShieldExclamationIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 8,
    content: "Section 3",
    target: "Questions",
    href: "/section3-questions",
    date: "Cybersecurity Tools",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Summary = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center flex-col justify-center">
      <div className="max-w-7xl flex items-center justify-center flex-col space-y-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
          <span className="block text-indigo-600 xl:inline">
            Congratulations
          </span>{" "}
          on completing this online module on basic computer security. Feel free
          to go back and review the content. Otherwise, remember what you
          learned and stay safe online.
        </h1>
        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== timeline.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative cursor-pointer flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                        )}
                      >
                        <event.icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          {event.content}{" "}
                          <a
                            href={event.href}
                            className="font-medium text-gray-900"
                          >
                            {event.target}
                          </a>
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime={event.datetime}>{event.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="/popups"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
        >
          Retake the test{" "}
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
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Summary;
