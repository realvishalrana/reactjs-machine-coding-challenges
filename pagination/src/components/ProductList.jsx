import React from "react";
import useList from "../hooks/useList";
import DisplayList from "./DisplayList";
import Pagination from "./Pagination";


const ProductList = () => {
  const props = useList();

  const { products, page, pageLimit } = props;

  return (
    <div>
      {products?.length > 0 && (
        <div className="products">
          {products
            .slice((page - 1) * pageLimit, page * pageLimit)
            .map((prod) => (
              <DisplayList key={prod.id} prod={prod} />
            ))}
        </div>
      )}
      <Pagination {...props} />
    </div>
  );
};

export default ProductList;
