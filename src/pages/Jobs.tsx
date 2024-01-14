import Job from "@/components/Job";
import Searchbar from "@/components/Searchbar";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "test",
      description: "desc",
      price: 32,
      datePosted: "12 Decembre",
      nbBids: 2,
    },
    {
      id: 2,
      title: "test",
      description: "desc",
      price: 32,
      datePosted: "12 Decembre",
      nbBids: 2,
    },
  ];

  /*async () => {
    try {
      const response = await axios.get("http://localhost:8888/api/job");

      console.log(response);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  };*/

  const searchParams = useSearchParams();

  return (
    <div className="mt-10 flex flex-col justify-around">
      <h1 className="ml-20 mb-5 font-semibold text-xl">Find freelance jobs</h1>
      <Searchbar placeholder="Search jobs" type="jobs" />
      <ul>
        <li>
          {jobs
            .filter((j) => j.title.match(""))
            .map((job) => (
              <Job
                title={job.title}
                description={job.description}
                price={job.price}
                datePosted={job.datePosted}
                key={job.id}
                id={job.id}
                nbBids={job.nbBids}
              />
            ))}
        </li>
      </ul>
    </div>
  );
}
