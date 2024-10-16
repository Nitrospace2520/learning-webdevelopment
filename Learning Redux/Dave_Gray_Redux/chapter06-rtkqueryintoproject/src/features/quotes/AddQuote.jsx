import { useState } from "react";
import { useAddQuoteMutation } from "../api/apiSlice.js";

const AddQuote = () => {
  const [addQuote] = useAddQuoteMutation();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quote || !author) return;
    addQuote({ quote, author });
    setQuote("");
    setAuthor("");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Add a Quote</h2>
      <form
        action="/quotes"
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="quote">Quote : </label>
          <input
            type="text"
            id="quote"
            name="quote"
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Enter Quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="author">Author : </label>
          <input
            placeholder="Enter Author"
            type="text"
            id="author"
            name="author"
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            background: "#007bff",
            color: "#fff",
            border: "none",
          }}
        >
          Add Quote
        </button>
      </form>
    </div>
  );
};

export default AddQuote;
