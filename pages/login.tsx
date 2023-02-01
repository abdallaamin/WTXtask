import styles from '../styles/Home.module.css'
import Popup from 'reactjs-popup';
import Modal from '../Components/Modal'

const Login = () => {
  
  return (
    <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      
    >
      {close => (
        <div className={styles.modal}>
          <div>
          <Modal/>
        </div>
        </div>
      )}
    </Popup>
  );
};

export default Login;
