import "./Login.css";

function Login() {
  return (
    <div>
      <h2>Log In</h2>
      <form>
        <label for="username">Username:</label>
        <input type="text" placeholder="Enter username" name="username" id="username"></input>

        <label for="password">Password</label>
        <input type="text" placeholder="Enter password" name="password" id="password"></input>
      </form>
    </div>
  );
}
export default Login;