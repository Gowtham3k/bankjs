import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-white">
            <h1 className="fw-bold">Welcome to MyBank</h1>
            <p className="lead">
              Your trusted digital banking partner.  
              Create account, deposit, withdraw and track all data easily.
            </p>
            <button
              className="btn btn-light btn-lg mt-3"
              onClick={() => navigate("/create")}
            >
              Start Banking →
            </button>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png"
              alt="banking"
              width="350"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
