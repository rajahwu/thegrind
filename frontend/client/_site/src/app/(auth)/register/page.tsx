import Link from "next/link";
import { LoginForm } from "@/components";

export default function Page() {
  const isRegistered = false;
  return (
    <div>
      <Link className="btn btn-ghost normal-case text-xl" href="/dashboard">
        Home
      </Link>
      <LoginForm isRegistered={isRegistered} />
    </div>
  );
}
