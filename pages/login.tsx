import { useCallback, useState } from "react";
import styles from '../styles/Home.module.css'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authenticate = useCallback(() => {
    fetch(`/api/auth?username=${username}&password=${password}`)
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <section >
      <h2>Login into WTX </h2>
      <div className={styles.logincontainer}>
        <div style={{marginBottom:'20px'}}>
          <label className={styles.label}>
          Username
        </label>
          <div >
        <input
          className={styles.nameinput}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          autoComplete="username"
          placeholder="Username"
        />
        </div>
        </div>
        <div >
        <label className={styles.label}>
        Password
        </label>
        </div>
        <div>
        <input
          className={styles.passinput}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="password"
          placeholder="Type your password"
        />
          <div className={styles.submitcontainer}>
        <input className={styles.submitbtn} onClick={() => authenticate()} type="submit" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Login;
