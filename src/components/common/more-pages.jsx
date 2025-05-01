import { Pagination } from "react-bootstrap";

/**
 * Used to paginate results or more pages to look for
 * @returns {JSX.Element}
 */
export default function MorePages({ totalPages, context }) {

  // Different handlers for different contexts. Context will be a string. Valid context values: search,
  const paginationHandlers = {
    'search':
  }

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item active>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}
