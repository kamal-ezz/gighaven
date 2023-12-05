import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex justify-around">
        <div className="flex flex-col gap-8 mt-20">
          <h1 className="text-3xl text-slate-500">
            A minimalistic collaboration environment
          </h1>
          <p className="text-xl">Join today it's free and simple</p>
          <Link href="/register">
            {" "}
            <Button className="w-fit">Get started</Button>
          </Link>
        </div>
        <Image
          src="/Cropped_Image.png"
          width={300}
          height={300}
          alt="hero"
          className="mt-10 rounded-full"
        />
      </section>
    </main>
  );
}
