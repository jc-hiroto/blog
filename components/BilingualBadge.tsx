import { RiTranslate } from "react-icons/ri";

function BilingualBadge({
  isEn,
  alterVerSlug,
}: {
  isEn: boolean;
  alterVerSlug: string;
}) {
  return (
    <div className="w-full flex flex-row justify-start items-center text-gray-400 mb-10">
      <RiTranslate className="my-auto mr-3 text-xl sm:text-2xl" />
      <div className="flex flex-row">
        <p className="text-xs sm:text-sm leading-normal">
          {isEn ? "This article is also available in " : "本文章也有提供"}
        </p>
        <a
          href={`${alterVerSlug}`}
          className="ml-1 text-xs sm:text-sm leading-normal text-gray-300 underline"
          target="_blank"
          rel="noreferrer"
        >
          {isEn ? "Traditional Chinese." : "英文版本。"}
        </a>
      </div>
    </div>
  );
}

export default BilingualBadge;
