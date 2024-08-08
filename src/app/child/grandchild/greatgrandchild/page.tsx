import Link from "next/link";

export default async function () {
  await wait(5000);
  return (
    <div>
      <h1>Great Grand Child Page</h1>
      <p>Did the loading file show?</p>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
