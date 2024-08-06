import Navbar from "../layout/components/Navbar.jsx";
import Footer from "../layout/components/Footer.jsx";
import "../../../styles/layout/Layout.css"


function Layout({ children }) {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
