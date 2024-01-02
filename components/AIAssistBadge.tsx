import { RiCopilotFill } from "react-icons/ri";

function AIAssistBadge({ translation = false }: { translation?: boolean }) {
  return (
    <div className="w-full flex flex-row justify-start items-center font-mono text-gray-600 mt-10">
      <RiCopilotFill className="my-auto mr-3 text-xl sm:text-2xl" />
      <p className="text-xs sm:text-sm leading-normal">
        {
          translation ?
          "The article is translated with the assistance of Gen-AI." :
          "The article is written with the assistance of Gen-AI."
        }
        <br />
        {
          translation ?
          "本文章使用生成式人工智慧協助翻譯。" :
          "本文章使用生成式人工智慧協助撰寫。"
        }
      </p>
    </div>
  );
}

export default AIAssistBadge;
