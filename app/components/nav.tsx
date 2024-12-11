import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  return (
    <nav className="container mx-auto max-w-3xl mb-8">
      <div className="flex justify-start">
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
  );
}
