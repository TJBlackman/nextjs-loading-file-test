import Link from "next/link";

export default async function () {
  return (
    <div>
      <h1>Parent Page</h1>
      <Link href="/child">Go to Child Page</Link>
      <br />
      <Link href="/child/grandchild">Go to GrandChild Page</Link>
      <br />
      <Link href="/child/grandchild/greatgrandchild">
        Go to Great GrandChild Page
      </Link>
    </div>
  );
}
