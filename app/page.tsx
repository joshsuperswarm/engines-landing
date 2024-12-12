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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <main className="container mx-auto py-12 md:py-24">
        {/* ASCII Art Title */}
        <div className="max-w-3xl mx-auto">
          <h1 className="font-mono text-left whitespace-pre text-[0.5rem] leading-[0.5rem] sm:text-xs sm:leading-[0.75rem] md:text-sm md:leading-[0.875rem] mb-8 text-black">
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
        <p className="text-left font-mono text-sm md:text-base text-gray-500 mb-12 max-w-3xl mx-auto">
          tools, context and sandboxes for AI SWEs
        </p>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Mission Statement */}
          <section className="font-mono text-sm md:text-base leading-relaxed text-gray-900">
            <p>
              Compute Time is scaling technology to produce cheap natural gas
              with sunlight and air. We are committed to cutting the net CO2
              flux from crust to atmosphere as quickly as possible. As solar
              power gets cheaper, there will come a time when it is cheaper to
              get carbon from the atmosphere than an oil well. That time is now.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <BlogPosts />
          </section>

          {/* Links
          <section className="flex flex-col gap-4">
            <Link
              href="https://computetime.ai/product"
              className="font-mono text-sm md:text-base text-gray-600 hover:text-black transition-colors"
            >
              Product Information
            </Link>
            <Link
              href="https://computetime.ai/updates"
              className="font-mono text-sm md:text-base text-gray-600 hover:text-black transition-colors"
            >
              Updates
            </Link>
            <Link
              href="/blog"
              className="font-mono text-sm md:text-base text-gray-600 hover:text-black transition-colors"
            >
              Blog Posts
            </Link>
          </section>
          */}

          {/* Updates Section
          <section className="space-y-6">
            <h2 className="font-mono text-lg md:text-xl text-gray-900">
              Latest Updates
            </h2>
            <div className="space-y-4">
              <div className="font-mono text-sm md:text-base text-gray-600">
                <span className="text-black font-bold">August 2024:</span> We
                have recently raised &lt;$15m (and counting) to accelerate
                development and deployment of the first full scale 1 MW Compute
                Time units. We also added new team members to accelerate our
                progress.
              </div>
              <div className="font-mono text-sm md:text-base text-gray-600">
                <span className="text-black font-bold">July 2024:</span> We
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
          <div className="pt-8">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="font-mono text-sm md:text-base text-gray-600 hover:text-black transition-colors mr-4"
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
