import { Link } from "react-router-dom";

export default function Feedback({ pic, name, content, date, jobTitle }: any) {
  return (
    <div className="flex gap-5 my-10">
      <img src={pic} width={70} height={70} alt="profile" className="border" />
      <div className="flex gap-1 flex-col">
        <div className="flex gap-2 items-center ">
          <span className="text-blue-500">{name}</span>
          <span className="text-gray-500">{date}</span>
        </div>
        <span>{content}</span>
        <span>
          for{" "}
          <Link to="#" className="underline underline-offset-2 font-semibold">
            {jobTitle}
          </Link>
        </span>
      </div>
    </div>
  );
}
