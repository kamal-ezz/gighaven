import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Freelancer({
  id,
  pic,
  name,
  location,
  rate,
  description,
}: any) {
  return (
    <div className="my-20 mx-auto w-3/5">
      <div className="flex mb-5 items-center justify-between">
        <div className="flex gap-3">
          <img
            src={pic}
            width={70}
            height={70}
            alt="profile"
            className="border"
          />
          <div className="flex gap-1 flex-col">
            <span>{name}</span>
            <span className="font-semibold">{location}</span>
            <span className="font-semibold">{rate}</span>
          </div>
        </div>
        <Link to={`/freelancers/${id}`}>
          <Button>View Profile</Button>
        </Link>
      </div>
      <hr />
      <p className="mt-3">{description}</p>
    </div>
  );
}
