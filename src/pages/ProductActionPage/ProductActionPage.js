import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_PRODUCT_REQUEST } from '../../features/EditingProductSlice';
import { ADD_PRODUCT_REQUEST, UPDATE_PRODUCT_REQUEST } from '../../features/productsSlice';
import { editingProductSelector } from '../../app/selector';

function ProductActionPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const EditingProduct = useSelector(editingProductSelector);

    const [values, setValues] = useState({
        id: '',
        txtName: '',
        txtPrice: '',
        chkbStatus: false,
    });
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(EDIT_PRODUCT_REQUEST(id));

            setValues({
                id: EditingProduct.id,
                txtName: EditingProduct.name,
                txtPrice: EditingProduct.price,
                chkbStatus: EditingProduct.status,
            });
        }
    }, [EditingProduct.id]); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event) => {
        event.persist();
        var name = event.target.name;

        setValues((values) => ({
            ...values,
            [name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
        }));
    };
    const onSave = (e) => {
        e.preventDefault();
        var product = {
            id: id,
            name: values.txtName,
            price: values.txtPrice,
            status: values.chkbStatus,
        };

        if (values.id) {
            dispatch(UPDATE_PRODUCT_REQUEST(product));
            navigate(-1);
        } else {
            dispatch(ADD_PRODUCT_REQUEST(product));
            navigate(-1);
        }
    };

    return (
        <Fragment>
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">C???p nh???t th??ng tin cho s???n ph???m</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={onSave}>
                                <div className="form-group">
                                    <label>T??n s???n ph???m</label>
                                    <input
                                        type="text"
                                        name="txtName"
                                        className="form-control"
                                        onChange={onChange}
                                        value={values.txtName}
                                        placeholder="Nh???p t??n s???n ph???m"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Gi??</label>
                                    <input
                                        type="text"
                                        name="txtPrice"
                                        className="form-control"
                                        value={values.txtPrice}
                                        onChange={onChange}
                                        placeholder="Nh???p gi?? s???n ph???m"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tr???ng th??i</label>

                                    <div className="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="chkbStatus"
                                                onChange={onChange}
                                                checked={values.chkbStatus}
                                            />
                                            C??n h??ng
                                        </label>
                                    </div>
                                </div>

                                <Link to="/product" className="btn btn-warning mr-10">
                                    Tr??? v???
                                </Link>
                                <button type="submit" className="btn btn-primary">
                                    Ch???p nh???n
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default ProductActionPage;
