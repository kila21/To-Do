import './Auth.css'

const Auth = () => {
    return (
      <form>
         <div className="username-container">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder='Username'/>
        </div>

        <div className="password-container">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder='Password'/>
        </div>

        <input type='submit' />
      </form>  
    )
}

export default Auth;