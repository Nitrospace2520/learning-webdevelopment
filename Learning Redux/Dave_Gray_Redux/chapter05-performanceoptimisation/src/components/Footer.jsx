const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#f5f5f5",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0",
      }}
    >
      <h3 style={{ textAlign: "center", width: "100%" }}>
        ©️ Copywrite to Blog Post, {new Date().getFullYear()}
      </h3>
    </div>
  );
};

export default Footer;
