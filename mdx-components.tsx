import { Link } from "@nextui-org/react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <div className="flex flex-row justify-start items-center mt-8 mb-4">
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
      <p className="text-md sm:text-lg font-normal text-gray-300 leading-[1.75] sm:leading-[1.75]">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="text-md font-normal text-white list-disc list-inside my-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="text-md font-normal text-white list-decimal list-inside my-2">
        {children}
      </ol>
    ),
    code: ({ children }) => (
      <code className="text-md font-mono text-white bg-gray-700 px-2 py-[0.1rem] rounded-md">
        {children}
      </code>
    ),
    pre: (props) => (
      <pre {...props} className="rounded-lg bg-[#0D1117] p-4 my-4" />
    ),
    img: (props) => (
      <div className="flex flex-col justify-center my-10">
        <img
          {...props}
          className="rounded-lg unselectable"
          alt={props?.alt ?? ""}
        />
        <p className="text-sm font-mono text-gray-400 text-center mt-2">
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
        className="text-md font-normal text-indigo-500"
      >
        {children}
      </Link>
    ),
    blockquote: ({ children }) => (
      <blockquote className="text-md font-semibold text-gray-500 border-l-4 border-indigo-800 pl-4 my-4">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
