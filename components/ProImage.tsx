import Image from "next/image";
import { ProImageMetadata } from "types/metadata";

function ProImage({ path, title, desc_zh, desc_en, reverse=false, camera, lens, film }: ProImageMetadata) {
  return (
    <div className={`h-full flex ${reverse? "sm:flex-row-reverse":"sm:flex-row"} flex-col justify-center items-stretch mt-12 mb-6`}>
      <div className="sm:w-[60%] h-full">
        <Image
          src={path}
          className="w-full rounded-md unselectable"
          width={0}
          height={0}
          sizes="100vw"
          alt="cover"
        />
      </div>
      <div className="sm:w-[30%] h-auto sm:mx-[5%] mx-2 flex flex-col sm:py-4 pt-4 sm:justify-between">
        <div className="flex flex-col space-y-2 sm:text-lg text-sm text-gray-400">
          <p className="font-bold sm:text-2xl text-lg text-gray-200">{title}</p>
          {(desc_zh) && <p>{desc_zh}</p>}
          {(desc_en) && <p>{desc_en}</p>}
        </div>
        <div className="flex flex-row sm:space-x-4 pt-4">
          <div className="border-l-1 border-gray-500 h-full sm:flex hidden" />
          <div className="flex flex-col space-y-0.5 sm:text-sm text-xs font-mono text-gray-500">
            <p>{camera}</p>
            <p>{lens}</p>
            <p>{film}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProImage;
