import { Link } from "@nextui-org/react";
import { FiGitBranch, FiGithub } from "react-icons/fi";

function Footer() {
  const commit = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;
  return (
    <div className="w-full h-[64px] px-8 flex flex-row justify-between content-center font-mono flex-wrap">
      <p className="text-xs text-gray-500">
        Copyright © {new Date().getFullYear()} James Chang.
      </p>
      <div className="flex-grow" />
      <div className="sm:flex flex-row w-[60%] justify-center content-center hidden">
        <Link
          className="text-sm text-gray-400"
          href="https://blog.jchiroto.dev/"
        >
          blog.
        </Link>
        <hr className="w-full border-gray-600 mr-4 ml-3 my-auto" />
        <Link className="text-sm text-gray-400" href="https://jchiroto.dev/">
          jchiroto.dev
        </Link>
      </div>
      <div className="flex-grow" />
      <div className="flex flex-row sm:mr-4 mr-2 mt-0 text-xs">
        <FiGitBranch className="my-auto mr-1 text-gray-500" />
        <Link className="text-xs text-gray-500" href={`https://github.com/jc-hiroto/blog/commit/${commit}`}>{commit?.slice(0, 7)}</Link>
      </div>
      <Link
        className="text-gray-500"
        aria-label="GitHub"
        href="https://github.com/jc-hiroto/blog"
        isExternal
      >
        <FiGithub />
      </Link>
    </div>
  );
}

export default Footer;
