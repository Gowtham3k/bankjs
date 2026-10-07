import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand fw-bold">💳 MyBank</span>

      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/create" className="nav-item">Create</Link>
        <Link to="/deposit" className="nav-item">Deposit</Link>
        <Link to="/withdraw" className="nav-item">Withdraw</Link>
        <Link to="/AllData" className="nav-item">All Data</Link>
      </div>
    </nav>
  );
}
