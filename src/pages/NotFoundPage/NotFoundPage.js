import { useNavigate } from "react-router-dom";
import styles from './NotFound.module.scss';


function NotFoundPage() {
  const nagigate = useNavigate();
  const GoBack = () => {
    nagigate(-1);
  };
  return (
    <div >
      <h1 className={styles.AuthorName}>
        Lê Trần Trung <br />
        Project website bán hàng bằng REACTJS
      </h1>
      <button onClick={GoBack} className={styles.goBackButton}>
        Quay lại trang trước
      </button>
    </div>
  );
}
export default NotFoundPage;
