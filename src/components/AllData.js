function AllData({ users }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center">data</h2>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Mail</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>
              <td>{u.balance}</td> {/* ✅ NOW WORKS */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllData;
