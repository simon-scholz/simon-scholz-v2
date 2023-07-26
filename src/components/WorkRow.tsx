import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

import cv from "../data/cv.json";

type RowData = {
  company: string;
  jobDescription?: string;
  period?: string;
  current?: boolean;
  childElement?: boolean;
  parentElement?: boolean;
  details?: string;
};

interface IWorkRow {
  data: RowData;
}

const WorkRow = ({ data }: IWorkRow) => {
  let [isOpen, setIsOpen] = useState(false);
  const [currentDataView, setCurrentDataView] = useState<RowData>(data)
  const {
    company,
    jobDescription,
    period,
    current,
    childElement,
    parentElement,
    details
  } = data;

  useEffect(() => {
    setCurrentDataView(data)
  }, [isOpen])

  const showPrev = () => {
    let currentIdx = cv.findIndex((v) => v === currentDataView);
    setCurrentDataView(cv[currentIdx - 1])
  }

  const showNext = () => {
    let currentIdx = cv.findIndex((v) => v === currentDataView);
    setCurrentDataView(cv[currentIdx + 1]);
  };

  const fetchPrev = () => {
    let currentIdx = cv.findIndex(v => v === currentDataView)
    return currentIdx !== 0 ? cv[currentIdx - 1] : undefined;
  };

  const fetchNext = () => {
    let currentIdx = cv.findIndex((v) => v === currentDataView);
    return currentIdx !== cv.length - 1 ? cv[currentIdx + 1] : undefined;
  };

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className={`flex flex-row justify-start items-start md:items-center gap-6 px-4 py-2 w-full rounded-md hover:bg-slate-50 dark:hover:bg-neutral-800 transition-all hover:transition-all hover:cursor-pointer`}
      >
        <div className="text-slate-400 font-medium min-w-fit grow-0">
          {parentElement ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
              />
            </svg>
          ) : childElement ? (
            <div className="w-5 h-0 md:h-5 opacity-0"></div>
          ) : (
            // <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   fill="none"
            //   viewBox="0 0 24 24"
            //   strokeWidth={1.5}
            //   stroke="currentColor"
            //   className="w-5 h-5"
            // >
            //   <path
            //     strokeLinecap="round"
            //     strokeLinejoin="round"
            //     d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            //   />
            // </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          )}
        </div>

        <div
          className={`flex flex-col md:flex-row justify-start items-start md:items-center gap-0 md:gap-6 w-[calc(100%-2.75rem)]`}
        >
          {!childElement ? (
            <p className="text-gray-900 dark:text-neutral-50 font-medium min-w-fit grow-0">
              {company}
            </p>
          ) : (
            <div className="relative text-slate-400 font-medium min-w-fit grow-0">
              <p className="text-gray-200 dark:text-neutral-700 font-medium min-w-fit grow-0">
                {company}
              </p>
              {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 absolute bottom-0 left-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg> */}
            </div>
          )}

          <p className="invisible h-0 md:h-auto md:visible overflow-hidden text-gray-200 dark:text-neutral-700 w-full truncate grow">
            {".".repeat(500)}
          </p>
          <p className="text-gray-600 dark:text-neutral-200 min-w-fit grow-0 pt-2 md:pt-0">
            {jobDescription}
          </p>
          {!current ? (
            <p className="text-slate-400 font-jetbrains w-44 min-w-[100px] md:pl-2 text-left md:text-right pt-2 md:pt-0 text-sm">
              {period}
            </p>
          ) : (
            <div className="flex flex-row gap-1 items-center min-w-[100px] justify-start md:justify-end pt-2 md:pt-0">
              <div className="rounded-full h-2 w-2 bg-emerald-400"></div>
              <p className="text-slate-400 font-jetbrains pl-2 text-sm">
                current
              </p>
            </div>
          )}
        </div>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500 delay-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 dark:bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center sm:p-4 text-center overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="transition ease duration-5000 transform sm:duration-300 sm:ease-out"
                enterFrom="translate-y-50 sm:opacity-0 sm:scale-y-75"
                enterTo="translate-y-0 sm:opacity-100 scale-y-100"
                leave="ease-in duration-200"
                leaveFrom="translate-y-0 sm:opacity-100 sm:scale-y-100"
                leaveTo="translate-y-100 sm:opacity-0 sm:scale-y-75"
              >
                <Dialog.Panel className="w-full md:max-w-3xl min-h-[460px] h-auto transform overflow-hidden rounded-t-2xl sm:rounded-2xl bg-white dark:bg-neutral-800 p-12 text-left align-middle shadow-xl transition-all absolute bottom-0 sm:relative">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-3 top-3 p-2 outline-none border-none text-slate-400 dark:text-slate-100 rounded-lg hover:bg-slate-50 dark:hover:bg-neutral-700 transition-all hover:transition-all hover:cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-neutral-50"
                  >
                    {currentDataView.company}
                  </Dialog.Title>
                  <p className="text-gray-600 dark:text-neutral-200 min-w-fit grow-0 pt-2 mb-6">
                    {currentDataView.jobDescription}
                  </p>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-neutral-300 whitespace-pre-line pb-4 overflow-y-scroll h-96">
                      {currentDataView.details ? currentDataView.details : ""}
                    </p>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row gap-3">
                    {fetchPrev() ? (
                      <button
                        onClick={showPrev}
                        className="flex flex-row w-full sm:w-1/2 items-center justify-center gap-2 p-2 outline-none border-none text-slate-400 dark:text-slate-100 rounded-lg bg-slate-100 dark:bg-neutral-700 transition-all hover:transition-all hover:cursor-pointer hover:text-slate-500 hover:bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-neutral-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 absolute left-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                          />
                        </svg>
                        <span className="ml-4 max-w-[80%]">
                          {fetchPrev()?.jobDescription} @ {fetchPrev()?.company}
                        </span>
                      </button>
                    ) : (
                      <div className="h-1 opacity-0 w-full sm:w-1/2"></div>
                    )}
                    {fetchNext() && (
                      <button
                        onClick={showNext}
                        className="flex flex-row w-full sm:w-1/2 items-center justify-center gap-2 p-2 outline-none border-none text-slate-400 dark:text-slate-100 rounded-lg bg-slate-100 dark:bg-neutral-700 transition-all hover:transition-all hover:cursor-pointer hover:text-slate-500 hover:bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-neutral-600"
                      >
                        <span className="mr-4 max-w-[80%]">
                          {fetchNext()?.jobDescription} @ {fetchNext()?.company}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5  absolute right-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default WorkRow;
