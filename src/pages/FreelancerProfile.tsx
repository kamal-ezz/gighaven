import Feedback from "@/components/Feedback";
import Skill from "@/components/Skill";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const feedbacks = [
  {
    pic: "/man.png",
    name: "John Cena",
    date: "Today",
    content: "Great Job",
    jobTitle: "Front end please",
  },
  {
    pic: "/man.png",
    name: "John Cena",
    date: "Today",
    content: "Great Job",
    jobTitle: "Front end please",
  },
];

export default function FreelancerProfile() {
  const pic = "";
  const name = "test";
  const location = "Casablanca";
  const rate = "100%";

  return (
    <div className="flex justify-evenly mt-5">
      <div className="flex gap-3 border flex-col px-16 py-5 items-center">
        <img
          src={pic}
          width={70}
          height={70}
          alt="profile"
          className="border"
        />
        <div className="flex gap-1 flex-col">
          <span className="font-semibold text-center text-lg">{name}</span>
          <span className="font-semibold">{location}</span>
          <span className="font-semibold text-center">{rate}</span>
        </div>
      </div>
      <div>
        <Tabs defaultValue="overview" className="w-[600px]">
          <TabsList className="grid w-full grid-cols-2 h-15">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <h1 className="font-semibold underline underline-offset-8 text-lg">
              Skills
            </h1>
            <p className="my-5">
              <Skill name="HTML" />
            </p>
            <h1 className="font-semibold underline underline-offset-8 text-lg">
              About
            </h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              accumsan elit, ac vestibulum risus. Phasellus porta, augue eget
              laoreet congue, lectus nibh sollicitudin metus, vitae finibus
              risus tellus non erat. Aliquam sed gravida lectus. Suspendisse
              eleifend a est sed tincidunt. Quisque vel lorem mattis orci
              facilisis venenatis in faucibus ligula. Mauris varius augue porta
              pellentesque interdum. In viverra, quam vitae posuere placerat,
              turpis sapien dignissim diam, et fringilla elit neque sit amet
              eros. Vestibulum maximus erat in mi maximus, in semper diam
              blandit. Ut rutrum accumsan hendrerit. Donec ut bibendum nunc.
            </p>
          </TabsContent>
          <TabsContent value="feedback">
            {feedbacks.map((f) => (
              <Feedback
                name={f.name}
                content={f.content}
                date={f.date}
                jobTitle={f.jobTitle}
                pic={f.pic}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
