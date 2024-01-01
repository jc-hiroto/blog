import type { MDXComponents } from "mdx/types";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import ProImage from "components/ProImage";
import CopyrightFooter from "./CopyrightFooter";
import { FaTerminal } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export const mdxComponents: MDXComponents = {
  h1: ({ id, ...props }) => (
    <div className="flex flex-row justify-start items-center mt-12 mb-4 group">
      <FiLink className="text-gray-800 text-xl mr-4 -ml-[36px] group-hover:text-gray-300 transition-all duration-300" />
      <h1
        id={id}
        className="sm:text-5xl text-4xl font-bold text-gray-100"
        {...props}
      />
      <hr className="ml-6 border-gray-700 flex-grow" />
    </div>
  ),
  h2: ({ id, ...props }) => (
    <div className="flex flex-row justify-start items-center mt-6 mb-3 group">
      <FiLink className="text-gray-800 text-xl mr-4 -ml-[36px] group-hover:text-gray-300 transition-all duration-300" />
      <h2
        id={id}
        className="sm:text-4xl text-3xl font-bold text-gray-100"
        {...props}
      />
      <hr className="ml-6 border-gray-800 flex-grow" />
    </div>
  ),
  h3: ({ id, ...props }) => (
    <h3
      id={id}
      className="text-3xl font-bold text-gray-100 mt-4 mb-2"
      {...props}
    />
  ),
  h4: ({ id, ...props }) => (
    <h4
      id={id}
      className="text-2xl font-bold text-gray-100 mt-2 mb-1"
      {...props}
    />
  ),
  h5: ({ id, ...props }) => (
    <h5
      id={id}
      className="text-xl font-bold text-gray-100 mt-2 mb-1"
      {...props}
    />
  ),
  h6: ({ id, ...props }) => (
    <h6 id={id} className="text-lg font-bold text-white mt-2 mb-1" {...props} />
  ),
  p: ({ children }) => (
    <p className="text-md sm:text-lg font-normal leading-[1.75] sm:leading-[1.75] mt-4 sm:mt-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="text-md sm:text-lg font-normal list-disc list-outside text-gray-300 my-2 ml-6 sm:leading-[1.75]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-md sm:text-lg font-normal list-decimal list-outside text-gray-300 my-2 ml-6 sm:leading-[1.75]">
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
