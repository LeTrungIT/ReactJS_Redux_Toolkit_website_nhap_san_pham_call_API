import { useNavigate } from "react-router-dom";
function NotFoundPage() {
  const nagigate = useNavigate();
  const GoBack = () => {
    nagigate(-1);
  };
  return (
    <div>
      <h1>
        Lê Trần Trung <br />
        Project website bán hàng bằng REACTJS
      </h1>
      <button onClick={GoBack} style={{ backgroundColor: "yellow" }}>
        Quay lại trang trước
      </button>
    </div>
  );
}
export default NotFoundPage;
