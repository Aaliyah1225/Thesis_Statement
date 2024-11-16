import "./Registers.css";

function Registers() {
  return (
    <div>
      <label for="username">
        <b>Create Username</b>
        <input type="text" placeholder="Enter username" name="username" id="username"></input>
      </label>
      <label for="password">
        <b>Create Password</b>
        <input type="text" placeholder="Enter password" name="password" id="password"></input>
        </label>
        <p>By creating an account, you have agreed to our<a>Terms and Privacy</a></p>
        <button type="submit" class="Registration">Register</button>
    </div>
  

  );
}

export default Registers;
