import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
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
        <div className="flex flex-col items-start w-full max-w-4xl">
          <h2 className="font-semibold">Hey, I'm Simon</h2>
          <p className="text-base pt-2">
            I design, build, and ship digital products. Right now I'm a product
            manager and UX/UI lead at 360dialog, a global Facebook business
            solution provider, enabling companies of all sizes and from all over
            the world to use WhatsApp.
          </p>
          <p className="text-base pt-2">
            I've previously co-founded CDF Technologies, where I led the design
            and creative direction of multiple B2B FinTech products and design
            systems.
          </p>
          <p className="text-base pt-2">
            Before CDF I worked as an automotive engineer, specializing in
            thermal and mechanical load collective simulation of powertrain
            components.
          </p>
        </div>

        <div className="flex flex-col items-start w-full max-w-4xl">
          <p className="bg-gray-800 rounded-full px-2 py-1 text-xs text-white tracking-wide mb-6 mt-20">
            WORK
          </p>

          <div className="flex flex-row justify-start align-baseline gap-6 px-2 py-2 w-full">
            <div className="flex flex-row justify-start align-baseline gap-8 w-full">
              <p className="text-gray-800 font-medium min-w-fit">360dialog</p>
              <p className="overflow-hidden text-gray-200 flex-shrink-1">
                {".".repeat(100)}
              </p>
              <p className="text-gray-600 min-w-fit">
                Product Manager & UX/UI Lead
              </p>
            </div>
            <p className="text-slate-400 font-jetbrains w-52">2020 —</p>
          </div>

          <div className="flex flex-row justify-start align-baseline gap-6 px-2 py-2 w-full">
            <div className="flex flex-row justify-start align-baseline gap-8 w-full">
              <p className="text-gray-800 font-medium min-w-fit">Divizend</p>
              <p className="overflow-hidden text-gray-200 flex-shrink-1">
                {".".repeat(100)}
              </p>
              <p className="text-gray-600 min-w-fit">
                Product Designer & Frontend Engineer
              </p>
            </div>
            <p className="text-slate-400 font-jetbrains w-52">2018 — 20</p>
          </div>

          <div className="flex flex-row justify-start align-baseline gap-6 px-2 py-2 w-full">
            <div className="flex flex-row justify-start align-baseline gap-8 w-full">
              <p className="text-gray-800 font-medium min-w-fit">
                CDF Technologies
              </p>
              <p className="overflow-hidden text-gray-200 flex-shrink-1">
                {".".repeat(100)}
              </p>
              <p className="text-gray-600 min-w-fit">Co-Founder</p>
            </div>
            <p className="text-slate-400 font-jetbrains w-52">2018 — 20</p>
          </div>

          <div className="flex flex-row justify-start align-baseline gap-6 px-2 py-2 w-full">
            <div className="flex flex-row justify-start align-baseline gap-8 w-full">
              <p className="text-gray-800 font-medium min-w-fit">Audi</p>
              <p className="overflow-hidden text-gray-200 flex-shrink-1">
                {".".repeat(100)}
              </p>
              <p className="text-gray-600 min-w-fit">
                Powertrain Simulation Engineer
              </p>
            </div>
            <p className="text-slate-400 font-jetbrains w-52">2015 — 18</p>
          </div>

          <p className="bg-gradient-to-r from-amber-400 via-red-500 to-pink-400 rounded-full px-2 py-1 text-xs text-white tracking-wide mb-6  mt-20">
            PERSONAL
          </p>
          <div className="flex flex-row justify-start align-baseline gap-6 px-2 py-2 w-full cursor-pointer">
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
                <p className="overflow-hidden text-gray-200 flex-shrink-1">
                  {".".repeat(300)}
                </p>
                <p className="text-slate-400 font-jetbrains w-52">
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
      </main>
    </div>
  );
}
