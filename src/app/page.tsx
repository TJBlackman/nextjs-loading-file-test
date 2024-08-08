import Link from "next/link";

export default async function () {
  return (
    <div>
      <h1>Parent Page</h1>
      <Link href="/child">Go to Child Page</Link>
    </div>
  );
}
