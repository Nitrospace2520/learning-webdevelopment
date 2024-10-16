import { useGetQuotesQuery } from "../api/apiSlice";
import QuoteCard from "./QuoteCard";

const QuoteList = () => {
  const {
    data: quotes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetQuotesQuery();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Quotes</h2>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error}</div>}
      {isSuccess && (
        <table
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid black" }}>Quote No</th>
              <th style={{ borderBottom: "1px solid black" }}>Quote</th>
              <th style={{ borderBottom: "1px solid black" }}>Author</th>
              <th style={{ borderBottom: "1px solid black" }}>Button</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote) => (
              <QuoteCard key={quote.id} {...quote} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuoteList;
