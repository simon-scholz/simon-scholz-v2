import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link"

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (event: React.MouseEvent<HTMLButtonElement>, text: string) => {
      event.preventDefault();
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute('value', text);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      setCopied(true)
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }, [copied]);

    return (
      <div className="w-full max-w-3xl flex flex-row items-center justify-between px-2 mt-20 mb-2 md:mb-6 pb-4 font-sans">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="border border-gray-800 dark:border-neutral-50 rounded-full ml-2 px-2 py-1 text-xs text-gray-900 dark:text-neutral-50 tracking-wide">
              Contact
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-2 bottom-6 mb-2 w-72 origin-bottom-left divide-y divide-gray-100 dark:divide-gray-700 dark:bg-neutral-800 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                <p className="text-sm text-gray-900 dark:text-neutral-50 p-2 font-medium">
                  Write to simonscholz@outlook.com
                </p>
              </div>
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={(e) =>
                        copyToClipboard(e, "simonscholz@outlook.com")
                      }
                      className={`${
                        active
                          ? "text-gray-900 bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-neutral-600"
                          : "text-gray-900 dark:text-neutral-50"
                      } flex flex-row w-full items-center justify-start gap-3 p-2 outline-none border-none hover:cursor-pointer rounded-lg text-sm transition-all`}
                    >
                      {copied ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-600 dark:text-neutral-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-600 dark:text-neutral-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                          />
                        </svg>
                      )}
                      {copied ? "Copied to clipboard!" : "Copy address"}
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="mailto:simonscholz@outlook.com"
                      className={`${
                        active
                          ? " text-gray-900 bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-neutral-600"
                          : " text-gray-900 dark:text-neutral-50"
                      } flex flex-row w-full items-center justify-start gap-3 p-2 outline-none border-none hover:cursor-pointer rounded-lg text-sm transition-all`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-600 dark:text-neutral-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      Open default email app
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link
          href="/impressum"
          className="px-2 py-1 text-xs text-gray-900 dark:text-neutral-50"
        >
          Impressum / Legal Notice
        </Link>
      </div>
    );
}

export default Footer