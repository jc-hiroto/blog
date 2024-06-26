import { useState } from "react";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { ProImageMetadata } from "types/metadata";
import { getGMapLink } from "utils/location";

function ProImage({
  path,
  title,
  subtitle,
  desc_zh,
  desc_en,
  reverse = false,
  camera,
  lens,
  film,
  lat,
  lng,
  loc,
}: ProImageMetadata) {
  return (
    <div
      className={`h-full flex ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } flex-col justify-center items-stretch mt-12 mb-6`}
    >
      <div className="sm:w-[60%] h-full">
        <Image
          src={path}
          className="w-full rounded-sm sm:rounded-md unselectable"
          width={0}
          height={0}
          sizes="100vw"
          alt="cover"
        />
      </div>
      <div className="sm:w-[30%] h-auto sm:mx-[5%] mx-2 flex flex-col sm:py-4 pt-4 sm:justify-between">
        <div className="flex flex-col sm:text-lg text-sm text-gray-400">
          <div className="flex flex-row items-baseline mb-4 gap-2 font-bold flex-wrap">
            <p className="sm:text-2xl text-lg text-gray-200">{title}</p>
            <p className="sm:text-xl text-lg text-gray-300">{subtitle}</p>
          </div>

          {desc_zh && <p className="my-0.5">{desc_zh}</p>}
          {desc_en && <p className="my-0.5">{desc_en}</p>}
          {lat && lng && (
            <a
              className="flex flex-row items-center sm:text-md text-xs font-mono text-gray-500 mt-4 hover:underline cursor-pointer"
              href={getGMapLink(lat, lng)}
              target="_blank"
            >
              <MdOutlineSatelliteAlt className="sm:text-lg text-md mr-2" />
              <Tooltip
                content="Link to Google Map"
                color="foreground"
                placement="bottom"
              >
                <p>{`${lat.toFixed(5)}, ${lng.toFixed(5)}`}</p>
              </Tooltip>
            </a>
          )}
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
