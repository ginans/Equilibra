import Navbar from "../layout/components/Navbar.jsx";
import Footer from "../layout/components/Footer.jsx";
import styles from "../../../styles/layout/Layout.module.scss"
import { Outlet } from "react-router-dom";


function Layout() {
  console.log("reenderizando layout")
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      <main className={styles.mainContent}><Outlet /></main>
      <Footer />
    </div>
  );
}

export default Layout;
