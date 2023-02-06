import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import styles from '../styles/Home.module.css'


type Props = {
onClose: ()=> void 
}

const Login:any = ({ onClose }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = useCallback(() => {
    fetch(`/api/auth?username=${username}&password=${password}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
      });
  }, [username, password]);


  const modalWrapperRef = React.useRef<any>();

  //popup close whenclick outside 
  const backDropHandler = (e: MouseEvent): void => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  }
  useEffect(() => {
    setIsBrowser(true);

    // attach event listener to the whole windor with our handler
    window.addEventListener('click', backDropHandler);
    // remove the event listener when the modal is closed
    return () => window.removeEventListener('click', backDropHandler);
  }, []);

  return (
    <div className={styles.modaloverlay}>
      <div className={styles.modal} ref={modalWrapperRef}>
        <section >
          <div className={styles.loginheader} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Login into WTX </div>
          <div className={styles.logincontainer}>
            <div style={{ marginBottom: '20px' }}>
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
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      Login,
      document.getElementById('modal-root')! 
    );
  } else {
    return null;
  }
};
  
    
export default Login;
