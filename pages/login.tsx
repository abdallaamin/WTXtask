import { useCallback, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authenticate = useCallback(() => {
    fetch(`/api/auth?username=${username}&password=${password}`)
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <section>
      <h2>Login</h2>
      <div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          autoComplete="username"
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="password"
          placeholder="Type your password"
        />
        <input onClick={() => authenticate()} type="submit" />
      </div>
    </section>
  );
};

export default Login;
