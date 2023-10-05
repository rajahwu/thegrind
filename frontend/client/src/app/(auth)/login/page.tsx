import LoginForm from '/src/components/LoginForm'

export default function Page() {
    const isRegistered = false;
    return (
        <div>
            <LoginForm isRegistered={isRegistered} />
        </div>    
    )
}