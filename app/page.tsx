import { FiPackage } from "react-icons/fi";

export default function Page() {
  return (
    <div className="w-full min-h-[90vh] px-8 pt-4 flex flex-col items-center justify-center">
      <FiPackage className="text-gray-800 z-0 -mb-[12rem]" size="20rem" />
      <p className="font-mono text-6xl font-bold text-gray-400 z-10">
        Unpacking stuff...
      </p>
    </div>
  );
}
