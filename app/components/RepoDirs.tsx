type reps = { type: string; name: string }[];

async function fetchRepoContents(name: string) {
  const resp = await fetch(`https://api.github.com/repos/sreeharims98/${name}/contents`, { next: { revalidate: 60 } });
  return await resp.json();
}

export default async function RepoDirs({ name }: { name: string }) {
  const repoContents = (await fetchRepoContents(name)) as reps;
  const repoContentsFil = repoContents.filter((r) => r.type === "dir");

  return (
    <div>
      {repoContentsFil.map((r) => (
        <h1 key={r.name}>{r.name}</h1>
      ))}
    </div>
  );
}
