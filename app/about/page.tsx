import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

type AboutMe = {
  name: string;
  avatar_url: string;
  html_url: string;
  login: string;
};

type About = {
  name: string;
  desc: string[];
  about: string;
  linkedin_url: string;
};

async function fetchAboutMe() {
  const resp = await fetch("https://api.github.com/users/sreeharims98");
  return await resp.json();
}

async function fetchAbout() {
  const resp = await fetch("http://localhost:3000/api/about");
  return await resp.json();
}

export default async function AboutPage() {
  const aboutMe = (await fetchAboutMe()) as AboutMe;
  const about = (await fetchAbout()) as About;

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold pb-4">About page</h1>
        <Button>Go back</Button>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <Image src={aboutMe.avatar_url} alt="" width={250} height={250} className="rounded-full" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4  max-w-xl">
          <Link href={aboutMe.html_url} target="_blank" className="font-bold text-2xl text-gray-700">
            {aboutMe.name}
          </Link>
          <span className="text-gray-500">{aboutMe.login}</span>
          <span className="text-gray-900">{about.desc.join(" && ")}</span>
          <span className="text-gray-500 text-justify">{about.about}</span>
          <Link href={about.linkedin_url} target="_blank" className="font-bold text-gray-700">
            Linked In
          </Link>
        </div>
      </div>
    </div>
  );
}
