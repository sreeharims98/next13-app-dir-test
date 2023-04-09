import Link from "next/link";

type reps = { id: string; name: string; description: string; html_url: string }[];

async function fetchRepos() {
  const resp = await fetch("https://api.github.com/users/sreeharims98/repos", { next: { revalidate: 60 } });
  return await resp.json();
}

export default async function ReposPage() {
  const repos = (await fetchRepos()) as reps;

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {repos.map((r) => (
        <div key={r.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{r.name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{r.description}</p>
          <Link
            href={`/repos/${r.name}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
}
