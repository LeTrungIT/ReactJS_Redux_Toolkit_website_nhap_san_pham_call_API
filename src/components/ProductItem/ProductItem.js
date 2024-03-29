import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './ProductItem.module.scss';

function ProductItem({ product, index, onDelete }) {
    const statusName = product.status ? 'Còn hàng' : 'Hết hàng';
    const statusClass = product.status ? 'warning' : 'default';

    const handleDelete = (id) => {
        if (window.confirm('Bạn chắc chắn muốn xóa hay không?')) {
            //eslint-disable-line
            onDelete(id);
        }
    };
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td className={styles.productName}>{product.name}</td>
            <td>{product.price} VNĐ</td>
            <td>
                <span className={`label label-${statusClass}`}>{statusName}</span>
            </td>
            <td>
                <Link to={`/product/${product.id}/edit`} className="btn btn-warning mr-10">
                    Sửa
                </Link>

                <button type="button" className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                    Xóa
                </button>
            </td>
        </tr>
    );
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func,
};
export default ProductItem;
