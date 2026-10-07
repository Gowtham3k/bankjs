import { useState } from "react";

export default function Create({ users, setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const createUser = () => {
    if (!name || !email || !password) {
      setMsg("❌ Fill all fields");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      balance: 1000 // 👈 default opening balance
    };

    setUsers(prev => [...prev, newUser]);
    setMsg(`✅ Account created successfully for ${email}`);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h4 className="text-center mb-3">Create Account</h4>

        {msg && <div className="alert alert-info p-2">{msg}</div>}

        <input
          className="form-control mb-2"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={createUser}>
          Create
        </button>
      </div>
    </div>
  );
}
