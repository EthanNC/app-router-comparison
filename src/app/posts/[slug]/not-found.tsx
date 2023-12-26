import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found Nested</h2>
      <p>Could not find post</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
