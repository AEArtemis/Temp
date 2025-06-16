import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Menu,
  LogOut,
  Bell,
  ClipboardList,
  Calendar,
  ChartColumnBig,
  UsersRound,
} from "lucide-react";
import logo from "./../assets/images/PlanoraLogo.png";
import icon from "./../assets/images/PlanoraIcon.png";
import avatar from "./../assets/images/Avatar.jpg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed);
  }, [collapsed]);

  const toggleCollapse = () => setCollapsed(!collapsed);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    navigate("/");
  };

  const titles = {
    "/dashboard": "Dashboard",
    "/tasks": "Tasks",
    "/calendar": "Calendar",
    "/analytics": "Analytics",
    "/team": "Team",
    "/settings": "Settings",
  };

  useEffect(() => {
    document.title = titles[location.pathname] || "Planora";
  }, [location.pathname]);

  const iconSize = "w-6 h-6";
  const iconHoverClass =
    "transition-transform duration-200 group-hover:scale-110";

  const linkClasses = (path) =>
    `flex items-center ${collapsed ? "justify-center space-x-0" : "justify-start space-x-2"}
     hover:bg-[#0C0A09] p-2 rounded transition-all ${
       location.pathname === path ? "bg-[#0C0A09]" : ""
     }`;

  const NavItem = ({ to, icon: Icon, label }) => (
    <Link to={to} className="relative group">
      <div className={linkClasses(to)}>
        <Icon className={`${iconSize} ${iconHoverClass}`} />
        {!collapsed && <span>{label}</span>}
      </div>
      {collapsed && (
        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
          {label}
        </span>
      )}
    </Link>
  );

  const SidebarContent = (
    <>
      <nav className="space-y-2">
        <div className="flex h-12 mb-2 relative w-25">
          <img
            src={logo}
            alt="Planora Logo"
            className={`absolute transition-opacity duration-300 object-contain w-24 ${
              collapsed ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={icon}
            alt="Planora Icon"
            className={`absolute transition-opacity duration-300 object-contain w-9 ${
              collapsed ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {!collapsed && (
          <span className="text-sm font-semibold mb-1 pb-3 pl-1 pt-1 opacity-60 text-left block w-full">
            Menu
          </span>
        )}
        <NavItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
        <NavItem to="/tasks" icon={ClipboardList} label="Tasks" />
        <NavItem to="/calendar" icon={Calendar} label="Calendar" />
        <NavItem to="/analytics" icon={ChartColumnBig} label="Analytics" />
        <NavItem to="/team" icon={UsersRound} label="Team" />

        {!collapsed && (
          <span className="text-sm font-semibold mb-1 pb-3 pl-1 pt-4 opacity-60 text-left block w-full">
            General
          </span>
        )}
        <NavItem to="/settings" icon={Settings} label="Settings" />
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 hover:bg-[#0C0A09] p-2 rounded transition-all mt-6 relative group"
      >
        <LogOut className={`${iconSize} ${iconHoverClass}`} />
        {!collapsed && <span>Logout</span>}
        {collapsed && (
          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
            Logout
          </span>
        )}
      </button>
    </>
  );

  return (
    <>
      <header
        className={`fixed top-0 h-16 bg-background text-foreground flex items-center justify-between px-6 shadow-md z-10
        transition-all duration-300 ease-in-out border-b rounded-xl ${
          collapsed ? "left-24 right-11" : "left-72 right-11"
        } dark:shadow-lg dark:border-muted`}
      >
        <button
          onClick={toggleCollapse}
          className="hover:bg-muted rounded-md transition-colors duration-200 cursor-pointer"
          aria-label="Toggle sidebar collapse"
        >
          <Menu className={`${iconSize} ${iconHoverClass}`} />
        </button>

        <div className="flex items-center gap-4">
          <button
            className="relative p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium">John Doe</span>
          </div>
        </div>
      </header>

      <div
        className={`h-screen bg-[#1C1917] text-white p-3 flex flex-col justify-between
        transition-all duration-300 ease-in-out ${collapsed ? "w-16" : "w-64"}`}
      >
        {SidebarContent}
      </div>
    </>
  );
};

export default Navbar;
