import Link from "next/link";
import { DM_Mono as Mono } from "next/font/google";
import { BlogPosts } from "app/components/posts";

const mono = Mono({ subsets: ["latin"], weight: ["400"] });

const navItems = {
  "/": {
    name: "home",
  },
  "https://twitter.com/jmvldz": {
    name: "𝕏",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <main className="container mx-auto py-12 md:py-24">
        {/* ASCII Art Title */}
        <div className="max-w-3xl mx-auto">
          <h1 className="font-mono text-left whitespace-pre text-[0.5rem] leading-[0.5rem] sm:text-xs sm:leading-[0.75rem] md:text-sm md:leading-[0.875rem] mb-8 text-black dark:text-white">
            {`
  ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗   ██╗████████╗███████╗
 ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║   ██║╚══██╔══╝██╔════╝
 ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║   ██║   █████╗
 ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║   ██║   ██╔══╝
 ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝   ██║   ███████╗
  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝    ╚═╝   ╚══════╝

 ████████╗██╗███╗   ███╗███████╗
 ╚══██╔══╝██║████╗ ████║██╔════╝
    ██║   ██║██╔████╔██║█████╗
    ██║   ██║██║╚██╔╝██║██╔══╝
    ██║   ██║██║ ╚═╝ ██║███████╗
    ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝
`}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-left font-mono text-sm md:text-base text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          tools, context and sandboxes for AI SWEs
        </p>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Mission Statement */}
          <section className="font-mono text-sm md:text-base leading-relaxed text-gray-900 dark:text-gray-100">
            <p>
              Compute Time is the best platform for AI software engineering
              agents. AI SWEs will become a fundamental part of every
              engineering organization. We are building the foundational
              building blocks to make that a reality.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <BlogPosts />
          </section>

          {/* Links
          <section className="flex flex-col gap-4">
            <Link
              href="https://computetime.ai/product"
              className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Product Information
            </Link>
            <Link
              href="https://computetime.ai/updates"
              className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Updates
            </Link>
            <Link
              href="/blog"
              className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Blog Posts
            </Link>
          </section>
          */}

          {/* Updates Section
          <section className="space-y-6">
            <h2 className="font-mono text-lg md:text-xl text-gray-900 dark:text-gray-100">
              Latest Updates
            </h2>
            <div className="space-y-4">
              <div className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-400">
                <span className="text-black dark:text-white font-bold">August 2024:</span> We
                have recently raised &lt;$15m (and counting) to accelerate
                development and deployment of the first full scale 1 MW Compute
                Time units. We also added new team members to accelerate our
                progress.
              </div>
              <div className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-400">
                <span className="text-black dark:text-white font-bold">July 2024:</span> We
                hired key positions in our DAC program and chemical process
                controls. Our electrolyzer team is making excellent progress
                setting up the StarLine solar production line.
              </div>
            </div>
          </section>
          */}
        </div>

        {/* Bottom Navigation */}
        <nav className="mt-12 max-w-3xl mx-auto">
          <div className="">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mr-4"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </main>
    </div>
  );
}
