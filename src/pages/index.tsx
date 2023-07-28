import Image from 'next/image'
import Head from 'next/head'
import WorkRow from '@/components/WorkRow'
import cv from "../data/cv.json"
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react'

export default function Home() {
  const [imgSrc, setImgSrc] = useState<string>("/wonky_small.svg");
  

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("prefered-theme");
    if (storedTheme === "darkTheme") {
      setImgSrc("/wonky_small_dark_bg.svg")
    } else {
      setImgSrc("/wonky_small.svg")
    }
  }, []);

  return (
    <div className="bg-white">
      <Head>
        <title>Simon Scholz</title>
        <meta name="description" content="Simon Scholz - Designer, who codes" />
        <meta name="keywords" content="UX, UI, Product Design, Development" />
        <meta name="author" content="Simon Scholz" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <script
          async
          data-no-cookie
          data-respect-dnt
          data-api="/_hive"
          src="/bee.js"
        ></script>
      </Head>

      <main
        className={`relative bg-white dark:bg-neutral-900 flex min-h-screen flex-col items-center justify-between p-10 pt-14 md:p-24 md:pb-0 font-sans`}
      >
        <div className="flex flex-col items-start w-full max-w-3xl">
          <div className="px-2">
            <h2 className="font-semibold text-gray-900 dark:text-neutral-50">
              Hey, I&apos;m Simon
            </h2>
            <p className="text-base tracking-normal pt-2 text-gray-900 dark:text-neutral-50">
              I design, build, and ship digital products. Within my 8+ years of
              experience I&apos;ve helped bringing products from zero to
              thousands of users. As a generalist, driven by societal impact and
              technological advancements, I never stop learning.
            </p>
            {/* <p className="text-base tracking-normal pt-2 text-gray-900 dark:text-neutral-50">
              I design, build, and ship digital products. Right now I'm leading
              product at 360dialog, enabling companies of all sizes and
              from all over the world to use WhatsApp.
            </p> */}
          </div>

          <p className="bg-gray-800 dark:bg-neutral-100 rounded-full ml-2 px-2 py-1 text-xs text-white dark:text-neutral-900 tracking-wide mb-6 mt-20">
            WORK
          </p>

          <div className="w-full max-w-3xl flex flex-col gap-8 md:gap-0">
            {cv.map((data, idx) => (
              <WorkRow key={"work-row-" + idx} data={data} />
            ))}
          </div>

          <p className="ml-2 bg-gradient-to-r from-amber-400 via-red-500 to-pink-400 rounded-full px-2 py-1 text-xs text-white tracking-wide mb-6 mt-20">
            PERSONAL
          </p>
          <div className="w-full max-w-3xl">
            <div className="flex flex-row justify-start items-center gap-6 px-4 pt-3 pb-2 w-full rounded-md hover:bg-slate-50 dark:hover:bg-neutral-800 transition-all hover:transition-all hover:cursor-pointer">
              <a
                href="https://homebaristacollective.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <div className="flex flex-row justify-start gap-8 w-full">
                  {/* TO-DO: use src="/wonky_small_dark_bg.svg" for dark mode */}
                  <Image
                    src={imgSrc}
                    width={30}
                    height={30}
                    alt="Logo for Home Barista Collective"
                    className="-mt-1"
                  />
                  <p className="text-gray-800  dark:text-neutral-50 font-medium min-w-fit">
                    Home Barista Collective
                  </p>
                  <p className="overflow-hidden text-gray-200 dark:text-neutral-700 shrink truncate">
                    {".".repeat(500)}
                  </p>
                  <p className="text-slate-400  font-jetbrains min-w-fit text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
