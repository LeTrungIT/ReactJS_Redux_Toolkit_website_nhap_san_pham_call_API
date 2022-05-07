import React, { Fragment, useEffect } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  DELETE_PRODUCT_REQUEST,
  FETCH_DATA_REQUEST,
} from "../../features/productsSlice";
import { productSelector } from "../../app/selector";

function ProductListPage(props) {
  const dispatch = useDispatch();
  const products = useSelector(productSelector);

  useEffect(() => {
    dispatch(FETCH_DATA_REQUEST());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(DELETE_PRODUCT_REQUEST(id));
  };

  const showProductItem = (products) => {
    let result = null;
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
            <Link to="/product/add" className="btn btn-danger mb-20">
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
