import type { MDXComponents } from "mdx/types";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import ProImage from "components/ProImage";
import CopyrightFooter from "./CopyrightFooter";
import { FaTerminal } from "react-icons/fa";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <div className="flex flex-row justify-start items-center mt-12 mb-4">
      <p className="sm:text-5xl text-4xl font-bold text-gray-100">{children}</p>
      <hr className="ml-4 border-gray-700 flex-grow" />
    </div>
  ),
  h2: ({ children }) => (
    <div className="flex flex-row justify-start items-center mt-6 mb-3">
      <p className="sm:text-4xl text-3xl font-bold text-gray-100">{children}</p>
      <hr className="ml-4 border-gray-800 flex-grow" />
    </div>
  ),
  h3: ({ children }) => (
    <p className="text-3xl font-bold text-gray-100 mt-4 mb-2">{children}</p>
  ),
  h4: ({ children }) => (
    <p className="text-2xl font-bold text-gray-100 mt-2 mb-1">{children}</p>
  ),
  h5: ({ children }) => (
    <p className="text-xl font-bold text-gray-100 mt-2 mb-1">{children}</p>
  ),
  h6: ({ children }) => (
    <p className="text-lg font-bold text-white mt-2 mb-1">{children}</p>
  ),
  p: ({ children }) => (
    <p className="text-md sm:text-lg font-normal leading-[1.75] sm:leading-[1.75] mt-4 sm:mt-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="text-md sm:text-lg font-normal list-disc list-inside text-gray-300 my-2 sm:leading-[1.75]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-md sm:text-lg font-normal list-decimal list-inside text-gray-300 my-2 sm:leading-[1.75]">
      {children}
    </ol>
  ),
  code: ({ children }) => (
    <code className="text-md sm:text-lg font-mono text-gray-400 bg-gray-800 px-1 py-[0.1rem] rounded-md">
      {children}
    </code>
  ),
  pre: (props) => (
    <pre {...props} className="rounded-lg bg-[#0D1117] p-4 my-4" />
  ),
  img: (props) => (
    <div className="flex flex-col justify-center my-4 sm:my-10">
      <Image
        src={`${props.src}`}
        className="w-full h-full rounded-md sm:rounded-lg unselectable"
        alt={props?.alt ?? ""}
        width={0}
        height={0}
        sizes="100vw"
      />
      <p className="text-xs sm:text-sm font-mono text-gray-400 text-center mt-2">
        {props?.alt ?? ""}
      </p>
    </div>
  ),
  a: ({ children, ...props }) => (
    <Link
      href={props.href}
      isExternal
      showAnchorIcon
      underline="active"
      className="text-md font-normal text-teal-400"
    >
      {children}
    </Link>
  ),
  blockquote: ({ children }) => (
    <blockquote className="text-md font-semibold text-gray-400 border-l-4 border-teal-400 pl-4 my-4">
      {children}
    </blockquote>
  ),
  ProImage: (props) => <ProImage {...props} />,
  Copyright: (props) => <CopyrightFooter {...props} />,
  EndMark: () => <FaTerminal className="text-gray-500 my-2" />,
};
