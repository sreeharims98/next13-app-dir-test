import Button from "../components/Button";

export default function ReposLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="text-xl font-bold pb-4">Repos Page</h1>
        <Button>Go back</Button>
      </div>
      <div>{children}</div>
    </div>
  );
}
