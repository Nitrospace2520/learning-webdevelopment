import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#f5f5f5",
        textAlign: "center",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        padding: "0 10px",
      }}
    >
      <h2 style={{ cursor: "pointer" }} onClick={handleHome}>
        Blog Post
      </h2>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <section style={{}}>
          <Link to="/" style={{ marginRight: "10px", color: "#f5f5f5" }}>
            Home
          </Link>
          <Link to="/posts" style={{ marginRight: "10px", color: "#f5f5f5" }}>
            Posts
          </Link>
          <Link
            to="/add-post"
            style={{ marginRight: "10px", color: "#f5f5f5" }}
          >
            Add Post
          </Link>
        </section>
      </nav>
    </div>
  );
};

export default Header;
