import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import WorkRow from '@/components/WorkRow'

const inter = Inter({ subsets: ['latin'] })

import cv from "../data/cv.json"

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <link
          rel="preload"
          href="/fonts/JetBrains-Mono/JetBrainsMono-Regular.woff2"
          as="font"
          crossOrigin=""
        />
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
        className={`bg-white flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="flex flex-col items-start w-full max-w-3xl">
          <div className="px-2">
            <h2 className="font-semibold">Hey, I'm Simon</h2>
            <p className="text-base tracking-wide pt-2">
              I design, build, and ship digital products. Right now I'm a
              product manager and UX/UI lead at 360dialog, a global Facebook
              business solution provider, enabling companies of all sizes and
              from all over the world to use WhatsApp.
            </p>
            <p className="text-base tracking-wide pt-2">
              I've previously co-founded CDF Technologies, where I led the
              design and creative direction of multiple B2B FinTech products and
              design systems.
            </p>
            <p className="text-base tracking-wide pt-2">
              Before CDF I worked as an automotive engineer, specializing in
              thermal and mechanical load collective simulation of powertrain
              components.
            </p>
          </div>

          <p className="bg-gray-800 rounded-full ml-2 px-2 py-1 text-xs text-white tracking-wide mb-6 mt-20">
            WORK
          </p>

          <div className="w-full max-w-3xl">
            {cv.map(({ company, jobDescription, period, current }, idx) => (
              <WorkRow
                key={"work-row-" + idx}
                company={company}
                jobDescription={jobDescription}
                period={period}
                current={current}
              />
            ))}
          </div>

          <p className="ml-2 bg-gradient-to-r from-amber-400 via-red-500 to-pink-400 rounded-full px-2 py-1 text-xs text-white tracking-wide mb-6  mt-20">
            PERSONAL
          </p>
          <div className="w-full max-w-3xl">
            <div className="flex flex-row justify-start align-baseline gap-6 px-4 pt-3 pb-2 w-full rounded-md hover:bg-slate-50 transition-all hover:transition-all hover:cursor-pointer">
              <a
                href="https://homebaristacollective.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <div className="flex flex-row justify-start align-baseline gap-8 w-full">
                  <Image
                    src="/wonky_small.svg"
                    width={30}
                    height={30}
                    alt="Logo for Home Barista Collective"
                    className="-mt-1"
                  />
                  <p className="text-gray-800 font-medium min-w-fit">
                    Home Barista Collective
                  </p>
                  <p className="overflow-hidden text-gray-200 shrink truncate">
                    {".".repeat(500)}
                  </p>
                  <p className="text-slate-400 font-jetbrains min-w-fit">
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
      </main>
    </div>
  );
}
