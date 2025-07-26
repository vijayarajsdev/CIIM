interface paginationprops {
  handlePagination: (page: number) => void;
  totalpages: number;
  currentPage: number;
}
const Pagination: React.FC<paginationprops> = ({
  handlePagination,
  totalpages,
  currentPage,
}) => {
  const pages = Array.from({ length: totalpages }, (_, i) => i + 1);
  return (
    <div>
      <div>Pagination</div>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePagination(1)}
        >
          {"<-FIRST"}
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
        >
          {"<-PREV"}
        </button>
        {pages.map((page) => (
          <button key={page} onClick={() => handlePagination(page)}>
            {page}
          </button>
        ))}
        <button
          disabled={pages.length === currentPage}
          onClick={() => handlePagination(currentPage + 1)}
        >
          {"NEXT->"}
        </button>
        <button
          disabled={currentPage === pages.length}
          onClick={() => handlePagination(pages.length)}
        >
          {"LAST->"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
