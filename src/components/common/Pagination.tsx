import ReactPaginate from "react-paginate";
import styled from "@emotion/styled";

const PaginationContainer = styled.div`
  .pagination-ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
    margin: 20px 0;
    gap: 10px; /* 페이지 간격 */
    margin: 100px 0px 0px 0px;
  }

  .pagination-ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; /* 버튼 크기 */
    height: 40px;
    font-size: 16px;
    font-family: "Arial", sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #555;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
  }

  .pagination-ul li:hover {
    background-color: #266d4e; /* Hover 시 배경색 */
    color: #fff; /* 글씨 색상 */
    border-color: #266d4e; /* 테두리 색상 */
  }

  .pagination-ul li.currentPage {
    background-color: #266d4e; /* 현재 선택된 페이지 */
    color: #fff;
    border-color: #266d4e;
  }

  .pageLabel-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px; /* '이전', '다음' 버튼 크기 */
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: #555;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    transition: all 0.3s ease;
    border-radius: 5px; /* 약간 둥근 모서리 */
  }

  .pageLabel-btn:hover {
    background-color: #266d4e;
    color: #fff;
    border-color: #266d4e;
  }
`;

const Pagination = () => {
  return (
    <PaginationContainer>
      <ReactPaginate
        pageCount={10}
        pageRangeDisplayed={10}
        marginPagesDisplayed={0}
        breakLabel={""}
        previousLabel={"<"}
        nextLabel={">"}
        containerClassName={"pagination-ul"}
        activeClassName={"currentPage"}
        previousClassName={"pageLabel-btn"}
        nextClassName={"pageLabel-btn"}
      />
    </PaginationContainer>
  );
};

export default Pagination;
