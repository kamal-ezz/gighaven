import Freelancer from "@/components/Freelancer";
import Searchbar from "@/components/Searchbar";
import { useSearchParams } from "react-router-dom";

const freelancers = [
  {
    id: 1,
    pic: "/man.png",
    name: "kamal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas vel elit at finibus. Fusce viverra mauris odio, in elementum diam suscipit eget. Ut vulputate erat eu neque aliquam, quis tristique sem pulvinar. Sed ornare quam nec vestibulum posuere. Quisque in sem sed metus condimentum cursus. Donec libero nibh, lobortis sed facilisis ac, luctus maximus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nec tortor quis nisl cursus dictum malesuada a nibh. Etiam massa velit, convallis scelerisque ligula et, consectetur auctor magna. Duis pharetra enim et efficitur mattis. Nam ac nibh et justo tincidunt finibus. Nulla sodales feugiat lacinia. Fusce nisl erat, dignissim eget placerat vitae, tincidunt at nibh. Praesent arcu eros, auctor at risus a, venenatis aliquam libero.",
    rate: "100%",
    location: "Casablanca",
  },
  {
    id: 2,
    pic: "/man.png",
    name: "bro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas vel elit at finibus. Fusce viverra mauris odio, in elementum diam suscipit eget. Ut vulputate erat eu neque aliquam, quis tristique sem pulvinar. Sed ornare quam nec vestibulum posuere. Quisque in sem sed metus condimentum cursus. Donec libero nibh, lobortis sed facilisis ac, luctus maximus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nec tortor quis nisl cursus dictum malesuada a nibh. Etiam massa velit, convallis scelerisque ligula et, consectetur auctor magna. Duis pharetra enim et efficitur mattis. Nam ac nibh et justo tincidunt finibus. Nulla sodales feugiat lacinia. Fusce nisl erat, dignissim eget placerat vitae, tincidunt at nibh. Praesent arcu eros, auctor at risus a, venenatis aliquam libero.",
    rate: "100%",
    location: "Casablanca",
  },
];

export default function Freelancers() {
  const searchParams = useSearchParams();

  return (
    <div className="mt-10 flex flex-col justify-around">
      <h1 className="ml-20 mb-5 font-semibold text-xl">Find freelancers</h1>
      <Searchbar placeholder="Search freelancers" type="freelancers" />
      <ul>
        <li>
          {freelancers
            .filter((f) => f.name.match(""))
            .map((freelancer) => (
              <Freelancer
                key={freelancer.id}
                id={freelancer.id}
                pic={freelancer.pic}
                name={freelancer.name}
                location={freelancer.location}
                description={freelancer.description}
                rate={freelancer.rate}
              />
            ))}
        </li>
      </ul>
    </div>
  );
}
