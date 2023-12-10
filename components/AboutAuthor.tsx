import { Link } from "@nextui-org/react";
import Image from "next/image";

function AboutAuthor() {
  const about_zh =
    "在灣區奮鬥的臺灣菜鳥工程師，平時除了寫扣也愛到處走走拍底片。這邊主要會聊一些關於軟體工程師的主題，同時也是我分享相片作品的地方。";
  const about_en =
    "A Taiwanese software engineer in the Bay Area. I love writing random code and film photography. This blog is mainly about software engineering and my photography works.";
  return (
    <div className="flex flex-col mt-40 mb-10 items-center">
      <div className="w-full flex flex-row justify-center items-center mb-4">
        <hr className="sm:w-[15%] border-gray-700" />
        <p className="text-lg font-mono text-gray-500 mx-4">
          關於作者 | About Author
        </p>
        <hr className="sm:w-[15%] border-gray-700" />
      </div>
      <div className="sm:max-w-[80%] xl:max-w-[60%] flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-6">
        <Image
          src="/img/jc-avatar.png"
          width="100"
          height="100"
          className="rounded-full"
          alt="author avatar"
        />
        <div className="flex flex-col justify-center items-start space-y-1">
          <div className="flex flex-row justify-start items-center space-x-4 flex-wrap">
            <p className="text-lg font-bold text-gray-200">James Chang</p>
            <Link
              className="text-md font-mono text-indigo-500"
              href="https://jchiroto.dev/"
              isExternal
              showAnchorIcon
            >
              @jc-hiroto
            </Link>
          </div>
          <p className="text-sm font-mono text-gray-300">
            Software Engineer + Photographer
          </p>
          <p className="text-md font-medium text-gray-500 pt-1">{about_zh}</p>
          <p className="text-md font-medium text-gray-500">{about_en}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutAuthor;
