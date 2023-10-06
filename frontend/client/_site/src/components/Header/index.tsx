import Link from "next/link";

export default function Header({pageTitle}: {pageTitle: string}) {
  return (
    <div className="navbar flex justify-between">
      <div>
        <h1 className="btn btn-ghost normal-case text-xl">{pageTitle}</h1>
      </div>
      <div className="mx-5">
        <Link className="btn btn-ghost normal-case text-xl" href="/register">
          Sign Up
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" href="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
