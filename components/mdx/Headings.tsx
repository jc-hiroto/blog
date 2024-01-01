import { useState } from "react";
import { FiLink, FiCheck } from "react-icons/fi";

interface HeadingProps {
  id: string;
}

const copyHeadingLink = (id: string, setIsCopied: Function) => {
  const postLink = `${window.location.origin}${window.location.pathname}`;
  const headingLink = `${postLink}#${id}`;
  navigator.clipboard.writeText(headingLink);
  setIsCopied(true);
  setTimeout(() => setIsCopied(false), 2000);
};

export function H1({ id, ...props }: HeadingProps) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div
      className="flex flex-row justify-start items-center mt-12 mb-4 group cursor-pointer"
      onClick={() => copyHeadingLink(id, setIsCopied)}
    >
      <p className="text-gray-800 hidden sm:block sm:text-xl sm:mr-4 sm:-ml-[36px] group-hover:text-gray-300 transition-all duration-300">
        <FiLink className={`${isCopied ? "hidden" : ""}`} />
        <FiCheck className={`${!isCopied ? "hidden" : ""}`} />
      </p>
      <h1
        id={id}
        className="sm:text-5xl text-4xl font-bold text-gray-100"
        {...props}
      />
      <hr className="ml-4 hidden sm:block border-gray-700 flex-grow" />
      <p className="text-gray-800 text-lg ml-4 sm:hidden group-hover:text-gray-300 transition-all duration-300">
        <FiLink className={`${isCopied ? "hidden" : ""}`} />
        <FiCheck className={`${!isCopied ? "hidden" : ""}`} />
      </p>
    </div>
  );
}

export function H2({ id, ...props }: HeadingProps) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="flex flex-row justify-start items-center mt-6 mb-3 group cursor-pointer"
    onClick={() => copyHeadingLink(id, setIsCopied)}>
      <p className="text-gray-800 hidden sm:block sm:text-xl sm:mr-4 sm:-ml-[36px] group-hover:text-gray-300 transition-all duration-300">
        <FiLink className={`${isCopied ? "hidden" : ""}`} />
        <FiCheck className={`${!isCopied ? "hidden" : ""}`} />
      </p>
      <h2
        id={id}
        className="sm:text-4xl text-3xl font-bold text-gray-100"
        {...props}
      />
      <hr className="hidden sm:block ml-4 border-gray-800 flex-grow" />
      <p className="text-gray-800 text-lg ml-4 sm:hidden group-hover:text-gray-300 transition-all duration-300">
        <FiLink className={`${isCopied ? "hidden" : ""}`} />
        <FiCheck className={`${!isCopied ? "hidden" : ""}`} />
      </p>
    </div>
  );
}

export function H3({ id, ...props }: HeadingProps) {
  return (
    <h3
      id={id}
      className="text-3xl font-bold text-gray-100 mt-4 mb-2"
      {...props}
    />
  );
}

export function H4({ id, ...props }: HeadingProps) {
  return (
    <h4
      id={id}
      className="text-2xl font-bold text-gray-100 mt-2 mb-1"
      {...props}
    />
  );
}

export function H5({ id, ...props }: HeadingProps) {
  return (
    <h5
      id={id}
      className="text-xl font-bold text-gray-100 mt-2 mb-1"
      {...props}
    />
  );
}

export function H6({ id, ...props }: HeadingProps) {
  return (
    <h6 id={id} className="text-lg font-bold text-white mt-2 mb-1" {...props} />
  );
}
