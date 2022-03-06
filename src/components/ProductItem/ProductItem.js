import { Link } from "react-router-dom";

function ProductItem(props) {
  const { product, index } = props;
  const statusName = product.status ? "Còn hàng" : "Hết hàng";
  const statusClass = product.status ? "warning" : "default";

  const handleDelete = (id) => {
    if (confirm("Bạn chắc chắn muốn xóa hay không?")) {      //eslint-disable-line
      props.onDelete(id);
    }
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price} VNĐ</td>
      <td>
        <span className={`label label-${statusClass}`}>{statusName}</span>
      </td>
      <td>
        <Link
          to={`/product/${product.id}/edit`}
          className="btn btn-warning mr-10"
        >
          Sửa
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(product.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}
export default ProductItem;
