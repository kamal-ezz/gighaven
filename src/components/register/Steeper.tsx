export default function Steeper({ currStep }: any) {
  return (
    <ol className="flex items-center w-full mb-5">
      <li
        className={`flex w-full items-center  after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block ${
          currStep == 0 ? "text-blue-600 " : "after:border-blue-100"
        }`}
      >
        <span
          className={`flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12 shrink-0 ${
            currStep == 0 ? "bg-blue-300" : "bg-gray-300"
          }`}
        >
          1
        </span>
      </li>
      <li
        className={`flex w-full items-center ${
          currStep == 1 ? "text-blue-600" : ""
        }`}
      >
        <span
          className={`flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12 shrink-0 ${
            currStep == 1 ? "bg-blue-300" : "bg-gray-300"
          }`}
        >
          2
        </span>
      </li>
    </ol>
  );
}
