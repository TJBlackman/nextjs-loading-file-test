import Link from "next/link";

export default async function () {
  await wait(5000);
  return (
    <div>
      <h1>Grand Child Page</h1>
      <Link href="/child/grandchild/greatgrandchild">
        Go to Great Grand Child Page
      </Link>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
