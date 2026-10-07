import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Create from "./components/Create";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/AllData";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState([]); // 🔥 MUST be array

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create users={users} setUsers={setUsers} />} />
        <Route path="/deposit" element={<Deposit users={users} setUsers={setUsers} />} />
        <Route path="/withdraw" element={<Withdraw users={users} setUsers={setUsers} />} />
        <Route path="/AllData" element={<AllData users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
