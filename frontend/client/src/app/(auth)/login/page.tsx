import Link from "next/link";
import { LoginForm } from "@/components";

export default function Page() {
    const isRegistered = false;
    return (
        <div>
            <Link href="/dashboard">Dashboard</Link>
            <LoginForm isRegistered={isRegistered} />
        </div>    
    )
}