import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="flex justify-around">
        <div className="flex flex-col gap-4 px-10 lg:px-0 md:gap-8 mt-20 ">
          <h1 className="text-3xl text-slate-500">
            A minimalistic collaboration environment
          </h1>
          <p className="text-xl">Join today it's free and simple</p>
          <Link to="/register">
            {" "}
            <Button className="w-fit">Get started</Button>
          </Link>
        </div>
        <img
          src="../assets/hero.png"
          width={300}
          height={300}
          alt="hero"
          className="mt-10 rounded-full hidden md:inline"
        />
      </section>
      <section className="mt-40 mb-20">
        <h1 className="text-xl text-center font-semibold">
          It's easy to get your work done on Gighaven
        </h1>
        <div className="mt-20 flex flex-col sm:flex-row justify-around gap-5">
          <div className="px-10">
            {/*<Image src="#" alt="" width={50} height={50} />*/}
            <h3 className="text-lg font-semibold mb-3">Post a Job</h3>
            <p className="inline-block">
              Start receiving bids within hours by creating your own free job
              posting.
            </p>
          </div>

          <div className="px-10">
            {/*<Image src="#" alt="" width={50} height={50} />*/}
            <h3 className="text-lg font-semibold mb-3">Hire Freelancers</h3>
            <p className="inline-block">
              Evaluate the received bids and engage the most skilled freelance
              professionals for the job.
            </p>
          </div>

          <div className="px-10">
            {/*<Image src="#" alt="" width={50} height={50} />*/}
            <h3 className="text-lg font-semibold mb-3">Get Work Done</h3>
            <p className="inline-block">
              Determine the payment terms and schedule while utilizing WorkRooms
              for seamless collaboration, communication, and work monitoring.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
