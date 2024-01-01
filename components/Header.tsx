import { Link } from "@nextui-org/react";
import { FiExternalLink } from "react-icons/fi";

function Header() {
  return (
    <div className="w-full h-[64px] px-8 flex flex-row items-center justify-between">
      <Link href="/" className="font-mono text-lg sm:text-xl font-semibold text-gray-400">
        blog.
      </Link>
      <hr className="w-[80%] mx-4 border-gray-600" />
      <Link
        href="https://jchiroto.dev"
        className="font-mono text-md text-gray-400"
        isExternal
      >
        <div className="flex flex-row align-middle">
          <p className="flex flex-row">jchiroto.dev </p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
