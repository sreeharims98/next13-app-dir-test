import RepoDirs from "@/app/components/RepoDirs";
import Spinner from "@/app/components/Spinner";
import { Suspense } from "react";

type RepoPageProps = {
  params: { name: string };
};

type repoType = {
  name: string;
  description: string;
  forks_count: number;
  watchers_count: number;
  stargazers_count: number;
};

async function fetchRepo(name: string) {
  const res = await fetch(`https://api.github.com/repos/sreeharims98/${name}`, { next: { revalidate: 60 } });
  return await res.json();
}

export default async function RepoPage({ params }: RepoPageProps) {
  const repo = (await fetchRepo(params.name)) as repoType;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-2xl text-gray-700">{repo.name}</h1>
      <span className="text-gray-500">{repo.description}</span>
      <div className="flex items-center gap-4">
        <span className="bg-white shadow p-2 rounded text-gray-500">🍴 : {repo.forks_count}</span>
        <span className="bg-white shadow p-2 rounded text-gray-500">👀 : {repo.watchers_count}</span>
        <span className="bg-white shadow p-2 rounded text-gray-500">🌟 : {repo.stargazers_count}</span>
      </div>
      <Suspense fallback={<Spinner />}>
        {/* @ts-expect-error Server Component */}
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
}
