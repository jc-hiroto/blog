import { PostMetadata } from "types/metadata";
import Image from "next/image";
import { calcReadingTime } from "utils";

function PostIntro({ metadata }: { metadata: PostMetadata }) {
  return (
    <div className=" flex flex-col justify-center items-start mt-10">
      <div className="w-full h-[30rem] ">
        <Image
          src={metadata.cover}
          className="w-full h-full object-cover"
          alt="cover"
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-8">
        <p className="text-6xl font-bold font-mono text-gray-100">
          {"> "}
          {metadata.title}
        </p>
        <hr className="mx-10 border-gray-500" />
        <div className="flex flex-col justify-between items-end">
          <p className="text-md font-mono text-gray-300">
            by {metadata.author}
          </p>
          <p className="text-md font-mono text-gray-500 ml-2">
            {metadata.date.toDateString()}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-4">
        <p className="text-xl font-mono text-gray-400 ml-2">
          {metadata.description}
        </p>
        <p className="text-sm font-mono text-gray-500 ml-2">
          {metadata.words} wds / approx.{" "}
          {calcReadingTime(metadata.words, metadata.language)} minute(s)
        </p>
      </div>
      <hr className="w-[100%] mx-auto border-gray-700 my-20" />
    </div>
  );
}

export default PostIntro;
