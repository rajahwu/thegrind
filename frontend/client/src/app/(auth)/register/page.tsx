import LoginForm from '/src/components/LoginForm'

export default function Page() {
    const isRegistered = true;
    return (
        <div>
            <LoginForm isRegistered={isRegistered} />
        </div>    
    )
}