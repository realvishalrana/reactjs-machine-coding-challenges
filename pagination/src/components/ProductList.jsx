import React from "react";
import useList from "../hooks/useList";
import Pagination from "./Pagination";
import DisplayList from "./DisplayList";

const ProductList = () => {
  const props = useList();

  const { products, page } = props;

  return (
    <div>
      {products?.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return <DisplayList prod={prod} />;
          })}
        </div>
      )}
      <Pagination {...props} />
    </div>
  );
};

export default ProductList;
