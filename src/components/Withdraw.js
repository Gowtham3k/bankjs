import { useState } from "react";

export default function Withdraw({ users, setUsers }) {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");

  const withdrawMoney = () => {
    const amt = Number(amount);
    const user = users.find(u => u.email === email);

    if (!user || amt <= 0) {
      setMsg("❌ Select user & valid amount");
      return;
    }

    if (amt > user.balance) {
      setMsg("❌ Insufficient balance");
      return;
    }

    const updatedUsers = users.map(u =>
      u.email === email
        ? { ...u, balance: u.balance - amt }
        : u
    );

    setUsers(updatedUsers);

    setMsg(`✅ Withdraw ₹${amt} successfully. Your account balance is ₹${user.balance - amt}`);
    setAmount("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h4 className="text-center">Withdraw</h4>

        {msg && <div className="alert alert-warning p-2">{msg}</div>}

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

        <button className="btn btn-danger w-100" onClick={withdrawMoney}>
          Withdraw
        </button>
      </div>
    </div>
  );
}
