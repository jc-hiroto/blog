import { TbLicenseOff } from "react-icons/tb";

function CopyrightFooter() {
  return (
    <div className="w-full flex flex-row justify-start items-center font-mono text-gray-600 mt-10">
      <TbLicenseOff className="my-auto mr-3 text-xl sm:text-2xl" />
      <p className="text-xs sm:text-sm leading-normal">
        Unauthorized copying is prohibited.
        <br />
        版權所有，未經同意請勿轉載。
      </p>
    </div>
  );
}

export default CopyrightFooter;
