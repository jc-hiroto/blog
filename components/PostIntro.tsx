import { PostMetadata } from "types/metadata";
import Image from "next/image";
import path from "path";

function PostIntro({ metadata }: { metadata: PostMetadata }) {
  return (
    <div className=" flex flex-col justify-center items-start mt-2 sm:mt-10">
      <div className="w-full h-[30rem] relative">
        <Image
          src={path.join("/img", metadata.cover)}
          className="w-full h-full object-cover unselectable"
          alt="cover"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-8 flex-wrap">
        <p className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-gray-100">
          {`/${metadata.prefix}﹥`}
          {metadata.title}
        </p>
        <div className="w-full sm:w-fit flex flex-row sm:flex-col justify-between sm:items-end items-center mt-4 sm:mt-0">
          <p className="text-md font-mono text-gray-300">
            by {metadata.author}
          </p>
          <p className="text-sm sm:text-md font-mono text-gray-500 sm:ml-2">
            on {metadata.date.toDateString()}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-4 flex-wrap">
        <p className="w-full md:w-fit sm: text-md md:text-lg lg:text-xl font-mono text-gray-400">
          {metadata.description}
        </p>
      </div>
      <hr className="w-[100%] mx-auto border-gray-700 my-10" />
    </div>
  );
}

export default PostIntro;
