import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Paging.css";

const Pagination = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <ReactPaginate
      pageCount={10}
      pageRangeDisplayed={10}
      marginPagesDisplayed={0}
      breakLabel={""}
      previousLabel={"이전"}
      nextLabel={"다음"}
      onPageChange={changePage}
      containerClassName={"pagination-ul"}
      activeClassName={"currentPage"}
      previousClassName={"pageLabel-btn"}
      nextClassName={"pageLabel-btn"}
    />
  );
};

export default Pagination;
