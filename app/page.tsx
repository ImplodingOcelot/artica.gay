import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link>
      </nav>
      <h1>hello world</h1>
    </main>
  );
}