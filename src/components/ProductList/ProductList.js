import PropTypes from 'prop-types';

function ProductList({ children }) {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title ct">Danh sách sản phẩm</h3>
            </div>
            <div className="panel-body">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </table>
            </div>
        </div>
    );
}
ProductList.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ProductList;
