import React from "react";

const Pagination = ({ postsLength, postPerPage, paginate }) => {
  // const [pageNumber, setPageNumbers] = useState([]);
  const numbers = [];
  for (let i = 1; i < Math.ceil(postsLength / postPerPage); i++) {
    numbers.push(i);
  }

  return (
    <ul className="pagination">
      {numbers.map((number) => (
        <li key={number}>
          <a onClick={() => paginate(number)} href="!#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
