import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
