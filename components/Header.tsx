import { Link } from "@nextui-org/react";
import { FiExternalLink } from "react-icons/fi";

function Header() {
  return (
    <div className="w-full h-14 px-8 flex flex-row items-center justify-between">
      <Link
        href="/"
        className="font-mono text-xl font-semibold text-gray-400"
      >
        blog.
      </Link>
      <hr
        className="w-[80%] border-gray-500" />
      <Link
        href="https://jchiroto.dev"
        className="font-mono text-sm text-gray-400"
        isExternal
      >
        <div className="flex flex-row align-middle">
          <p className="flex flex-row">jchiroto.dev </p>
          <FiExternalLink className="my-auto ml-2" />
        </div>
      </Link>
    </div>
  );
}

export default Header;
