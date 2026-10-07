import { useState } from "react";

export default function Deposit({ users, setUsers }) {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");

  const depositMoney = () => {
    const amt = Number(amount);
    if (!email || amt <= 0) {
      setMsg("❌ Select user & enter valid amount");
      return;
    }

    const updatedUsers = users.map(user =>
      user.email === email
        ? { ...user, balance: user.balance + amt }
        : user
    );

    setUsers(updatedUsers);

    const user = updatedUsers.find(u => u.email === email);
    setMsg(`✅ Deposited ₹${amt} successfully. Your account balance is ₹${user.balance}`);

    setAmount("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h4 className="text-center">Deposit</h4>

        {msg && <div className="alert alert-success p-2">{msg}</div>}

        {/* USER SELECT */}
        <select
          className="form-control mb-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
        >
          <option value="">Select Account</option>
          {users.map((u, i) => (
            <option key={i} value={u.email}>
              {u.name} ({u.email})
            </option>
          ))}
        </select>

        <input
          className="form-control mb-3"
          placeholder="Enter amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <button className="btn btn-success w-100" onClick={depositMoney}>
          Deposit
        </button>
      </div>
    </div>
  );
}
