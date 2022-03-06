import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import callAPI from "../../utils/apiCaller";
import { EDIT_PRODUCT } from '../../features/EditingProductSlice';
import {ADD_PRODUCT, UPDATE_PRODUCT} from '../../features/productsSlice';

function ProductActionPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const EditingProduct = useSelector(state => state.EditingProduct);

    const [values, setValues] = useState({
        id: '',
        txtName: '',
        txtPrice: '',
        chkbStatus: false
    });
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            callAPI(`products/${id}`, 'GET', null).then(res => {
                const action = EDIT_PRODUCT(res.data);
                dispatch(action);
            }
            )
            setValues({
                id: EditingProduct.id,
                txtName: EditingProduct.name,
                txtPrice: EditingProduct.price,
                chkbStatus: EditingProduct.status

            })

        }

    }, [EditingProduct.id]);

    const onChange = (event) => {
        event.persist();
        var name = event.target.name;

        setValues((values) => ({
            ...values,
            [name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
        }));


    }
    const onSave = (e) => {
        e.preventDefault();
        var product = {
            id: id,
            name: values.txtName,
            price: values.txtPrice,
            status: values.chkbStatus

        };


        if (values.id) {
            callAPI(`products/${product.id}`, 'PUT', product).then(res=>{
                const action=UPDATE_PRODUCT(res.data);
                dispatch(action);
            })
            navigate(-1);


        }
        else {
            callAPI('products', 'POST', product).then(res=>{
                const action=ADD_PRODUCT(res.data);
                dispatch(action);
            })
            navigate(-1);
        }
    }
    console.log(EditingProduct)


    return (
        <Fragment>

            <div className="row">

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Cập nhật thông tin cho sản phẩm</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={onSave}>

                                <div className="form-group">
                                    <label >Tên sản phẩm</label>
                                    <input type="text"
                                        name='txtName'
                                        className="form-control"
                                        onChange={onChange}
                                        value={values.txtName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Giá</label>
                                    <input type="text" name='txtPrice' className="form-control" value={values.txtPrice}
                                        onChange={onChange}
                                        placeholder="Input field" />
                                </div>
                                <div className="form-group">
                                    <label >Trạng thái</label>

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name='chkbStatus'
                                                onChange={onChange}
                                                checked={values.chkbStatus} />
                                            Còn hàng
                                        </label>

                                    </div>

                                </div>

                                <Link to='/product' className="btn btn-warning mr-10">Trở về</Link>
                                <button type="submit" className="btn btn-primary">Chấp nhận</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    );

}
export default ProductActionPage;