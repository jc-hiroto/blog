import Image from "next/image";
import { ProImageMetadata } from "types/metadata";

function ProImage({ path, desc_zh, desc_en, reverse=false, camera, lens, film }: ProImageMetadata) {
  return (
    <div className={`h-full flex ${reverse? "sm:flex-row-reverse":"sm:flex-row"} flex-col justify-center items-stretch my-8`}>
      <div className="sm:w-[60%] h-full">
        <Image
          src={path}
          className="w-full rounded-md"
          width="0"
          height="0"
          alt="cover"
        />
      </div>
      <div className="sm:w-[30%] h-auto mx-[5%] flex flex-col sm:py-4 pt-4 sm:justify-between">
        <div className="flex flex-col space-y-2 sm:text-md text-sm text-gray-400">
          <p>{desc_zh}</p>
          <p>{desc_en}</p>
        </div>
        <div className="flex flex-col space-y-1 text-xs font-mono text-gray-500 pt-4">
          <p>{camera}</p>
          <p>{lens}</p>
          <p>{film}</p>
        </div>
      </div>
    </div>
  );
}

export default ProImage;
