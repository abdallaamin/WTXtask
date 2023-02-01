
import { useCallback, useEffect, useState } from "react"; 
import styles from '../styles/Home.module.css'

type Props = {}

const Modal = (props: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(true)

    const authenticate = useCallback(() => {
        fetch(`/api/auth?username=${username}&password=${password}`)
            .then((r) => r.json())
            .then((data) => console.log(data));
    }, [username, password]);

    const loadmodal = () => {
        useEffect(() => {
            setTimeout(() => {
                setShow(true)
            }, 2000)
        }, [])
    }
return (
<div>
<section >
    <div className={styles.loginheader}style={{display:'flex',alignItems:'center' , justifyContent:'center'}}>
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
    )
}

export default Modal;