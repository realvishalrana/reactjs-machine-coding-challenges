import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PAGE_LIMITS = [10, 20, 30, 40, 50];

const useList = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(parseInt(query.get("page")) || 1);
  const [pageLimit, setPageLimit] = useState(
    parseInt(query.get("limit")) || PAGE_LIMITS[0]
  );

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    queryParams.set("page", page);
    queryParams.set("limit", pageLimit);
    navigate({ search: queryParams.toString() });
  }, [page, pageLimit, navigate]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const handlePageLimitChange = (event) => {
    setPageLimit(Number(event.target.value));
    selectPageHandler(1);
  };

  return {
    products,
    selectPageHandler,
    page,
    pageLimit,
    setPageLimit,
    handlePageLimitChange,
    PAGE_LIMITS,
  };
};

export default useList;
