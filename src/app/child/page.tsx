import Link from "next/link";

export default async function () {
  await wait(5000);
  return (
    <div>
      <h1>Child Page</h1>
      <Link href="/child/grandchild">Go to Grand Child Page</Link>
      <br />
      <Link href="/child/grandchild/greatgrandchild">
        Go to Great GrandChild Page
      </Link>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
