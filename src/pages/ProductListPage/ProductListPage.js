import React, { Fragment, useEffect } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_PRODUCT, FETCH_DATA } from "../../features/productsSlice";
import callAPI from "../../utils/apiCaller";

function ProductListPage(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    callAPI("products", "GET", null).then((res) => {
      const action = FETCH_DATA(res.data);
      dispatch(action);
    });
  }, [dispatch]);

  const onDelete = (id) => {
    callAPI(`products/${id}`, "DELETE", null).then((res) => {
      const action = DELETE_PRODUCT({ id });
      dispatch(action);
    });
  };

  var showProductItem = (products) => {
    var result = null;
    if (products && products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={onDelete}
          />
        );
      });
    }
    return result;
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/product/add" className="btn btn-primary mb-20">
              Thêm sản phẩm
            </Link>
          </div>
        </div>
        <ProductList>{showProductItem(products)}</ProductList>
      </div>
    </Fragment>
  );
}

export default ProductListPage;
