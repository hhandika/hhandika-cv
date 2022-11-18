import Link from "next/link";

// Build react navbar component
export default function Navbar() {
  return (
    <nav className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About Me{" "}
          </Link>
          <Link href="/about">Projects </Link>
          <Link href="/about">Publications </Link>
          <Link href="/about">Teaching & Outreach </Link>
          <Link href="/about">Fieldwork </Link>
          <Link href="/about">Code </Link>
          <Link href="/contacts">Contacts</Link>
        </div>
      </div>
    </nav>
  );
}
