import "./App.css";
import Input from "./components/Input";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello Redux</h1>
      <Input />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
