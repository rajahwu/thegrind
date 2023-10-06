import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/login">Login</Link>
      <Link href="/register">Sign Up</Link>
    </>
  );
}
