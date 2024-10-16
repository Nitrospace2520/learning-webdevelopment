import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <div>
        <Header />
        <h1 style={{ color: "green" }}>Blog Project</h1>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
