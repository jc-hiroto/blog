import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <p className="text-6xl font-bold text-gray-100 mt-5 mb-2 leading-[1.2]">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <p className="text-4xl font-bold text-gray-100 mt-5 mb-2">{children}</p>
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
      <p className="text-md font-normal text-gray-200 leading-loose">
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
    ...components,
  };
}
