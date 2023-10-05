"use-client"

export default function LoginForm({ isRegistered }) {
    const loginType: string = isRegistered === false ? 'register' : 'login'
    return (
        <form method="post" action={`http://localhost:8000/${loginType}`}>
            <label htmlFor="username">username</label>
            <input id="username" name="username" type="text" />
            <label htmlFor="email">email</label>
            <input id="email" name="email" type="text" />
            <label htmlFor="password">password</label>
            <input id="password" name="password" type="text" />
            <label htmlFor="confirm-password">confirm password</label>
            <input id="confirm-password" name="confirm-password" type="text" />
            <button id="submit" type="submit">Submit</button>
        </form>
    )
    
}