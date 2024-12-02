import "./Registers.css";

function Registers() {
  return (
    <div>
      <label htmlFor="username">
        <b>Create Username</b>
        <input type="text" placeholder="Enter username" name="username" id="username"></input>
      </label>
      <label htmlFor="password">
        <b>Create Password</b>
        <input type="text" placeholder="Enter password" name="password" id="password"></input>
        </label>
        <p>By creating an account, you have agreed to our<a>Terms and Privacy</a></p>
        <button type="submit" className="Registration">Register</button>
    </div>
  

  );
}

export default Registers;
