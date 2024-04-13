import { RiCopilotFill } from "react-icons/ri";

function AIAssistBadge({ translation = false }: { translation?: boolean }) {
  return (
    <div className="w-full flex flex-row justify-start items-center font-mono text-gray-600 mt-10">
      <RiCopilotFill className="my-auto mr-3 text-xl sm:text-2xl" />
      <p className="text-xs sm:text-sm leading-normal">
        {translation
          ? "The article is translated with the assistance of LLM."
          : "The article is written with the assistance of LLM."}
        <br />
        {translation
          ? "本文章使用大語言模型協助翻譯。"
          : "本文章使用大語言模型協助撰寫。"}
      </p>
    </div>
  );
}

export default AIAssistBadge;
