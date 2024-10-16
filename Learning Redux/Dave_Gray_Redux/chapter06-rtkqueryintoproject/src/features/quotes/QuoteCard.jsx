import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDeleteQuoteMutation } from "../api/apiSlice";

const QuoteCard = (quote) => {
  const [deleteQuote] = useDeleteQuoteMutation();
  const handleDelete = () => {
    console.log(quote.id);
    deleteQuote(quote.id);
  };
  return (
    <tr key={quote.id} style={{ border: "3px solid #f5f5f5" }}>
      <td>{quote.id}</td>
      <td>{quote.quote}</td>
      <td>{quote.author}</td>
      <td>
        <button
          onClick={handleDelete}
          style={{
            padding: "5px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default QuoteCard;
