"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  const pathname = usePathname();

  return (
    <section className="flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div className="m-4 mb-4 rounded-md border bg-white px-6 py-24 shadow-md md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="fill-primary text-8xl" />
          </div>
          <div className="text-center">
            <h1 className="mb-2 mt-4 text-3xl font-bold">Page Not Found</h1>
            <p className="mb-10 text-xl text-gray-500">
              {pathname.includes("/profil")
                ? "The page is not available in your role."
                : "The page you are looking for does not exist."}
            </p>
            <Link
              href="/"
              className="rounded bg-primary px-6 py-4 font-bold text-white hover:opacity-90"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
