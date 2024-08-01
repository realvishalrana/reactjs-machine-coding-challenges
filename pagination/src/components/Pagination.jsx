import React from "react";

const Pagination = ({
  products,
  page,
  selectPageHandler,
  pageLimit,
  handlePageLimitChange,
  PAGE_LIMITS,
}) => {
  return (
    <div className="pagination__wrapper">
      {products.length > 0 && (
        <>
          <div className="limit__select">
            <label htmlFor="limit">Items per page:</label>
            <select
              id="limit"
              value={pageLimit}
              onChange={handlePageLimitChange}
            >
              {PAGE_LIMITS.map((limit) => (
                <option key={limit} value={limit}>
                  {limit}
                </option>
              ))}
            </select>
          </div>
          <div className="pagination">
            <span
              onClick={() => selectPageHandler(page - 1)}
              className={page > 1 ? "" : "pagination__disable"}
            >
              ◀
            </span>

            {[...Array(Math.ceil(products.length / pageLimit))].map((_, i) => (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            ))}

            <span
              onClick={() => selectPageHandler(page + 1)}
              className={
                page < Math.ceil(products.length / pageLimit)
                  ? ""
                  : "pagination__disable"
              }
            >
              ▶
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
