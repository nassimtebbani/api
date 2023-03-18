import { Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import Details from "./Details";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
