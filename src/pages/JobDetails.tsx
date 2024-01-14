import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

export default function JobDetails() {
  const params = useParams();

  const datePosted = "12 december 2023";
  const title = "Help set-up WordPress t-shirt site";
  const price = "300$";
  const bidsNb = 3;
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec utaccumsan elit, ac vestibulum risus. Phasellus porta, augue egetlaoreet congue, lectus nibh sollicitudin metus, vitae finibusrisus tellus non erat. Aliquam sed gravida lectus. Suspendisseeleifend a est sed tincidunt. Quisque vel lorem mattis orcifacilisis venenatis in faucibus ligula. Mauris varius augue portapellentesque interdum. In viverra, quam vitae posuere placerat,";

  return (
    <div className="flex justify-center mt-5">
      <div className="w-1/2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Posted : {datePosted}</span>
            <h1 className="text-xl font-semibold">{title}</h1>
            <span className="font-semibold">{price}</span>
            <span className="text-blue-500">Bids : {bidsNb}</span>
          </div>
          <Link to={`/bid/${params.id}`}>
            <Button className="w-fit">Make a Bid</Button>
          </Link>
        </div>
        <div>
          <hr className="mt-3" />
          <p className="mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
}
