import { Link } from "react-router-dom";

function Navigation({ children }) {
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/add-transaction">Add Transaction</Link>
          </li>
          <li>
            <Link to="/report">Report</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default Navigation;