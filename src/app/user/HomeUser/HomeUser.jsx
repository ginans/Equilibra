import { Route, Routes, Link } from "react-router-dom";
import Hamburger from "../layout/components/Hamburger";

function HomeUser() {
  console.log("Rendering App.jsx");
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/components/Hamburger">Hamburger page</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/components/Hamburger" element={<Hamburger />} />
      </Routes>
    </div>
  );
}

export default HomeUser;
