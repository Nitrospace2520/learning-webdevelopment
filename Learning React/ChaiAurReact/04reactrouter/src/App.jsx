/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { About, Footer, Header, Home, Contact } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
