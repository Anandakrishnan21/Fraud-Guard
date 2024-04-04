import React from "react";
import GoogleBtn from "./GoogleBtn";
import Link from "next/link";

function Separator({ text, linkName, status, url }) {
  return (
    <>
      <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:border-neutral-400 dark:before:border-neutral-600 after:mt-0.5 after:flex-1 after:border-t dark:after:border-neutral-600">
        <p className="mx-4 mb-0 text-center font-semibold text-neutral-500 dark:text-neutral-600">
          or
        </p>
      </div>
      <GoogleBtn text={text} />
      <p className="text-sm">
        {status}{" "}
        <Link
          href={url}
          className="text-blue-600 hover:text-blue-800 duration-500 text-sm md:text-base leading-normal"
        >
          {linkName}
        </Link>
      </p>
    </>
  );
}

export default Separator;
