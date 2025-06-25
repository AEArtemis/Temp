import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  Bell,
  ClipboardList,
  Calendar,
  ChartColumnBig,
  UsersRound,
  ArrowBigLeftDash,
  ArrowBigRightDash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import avatar from "@/assets/images/Avatar.jpg";
import icon from "@/assets/images/PlanoraIcon.png";

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

  const navItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/tasks", icon: ClipboardList, label: "Tasks" },
    { to: "/calendar", icon: Calendar, label: "Calendar" },
    { to: "/analytics", icon: ChartColumnBig, label: "Analytics" },
    { to: "/team", icon: UsersRound, label: "Team" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  const NavLink = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to;
    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link to={to}>
              <div className="pb-1">
                <Button
                  variant="ghost"
                  className={`w-full flex items-center group rounded-md transition-all ${
                  collapsed ? "justify-center" : "justify-start gap-2"
                  } ${isActive ? "bg-muted text-primary" : "hover:bg-muted"}`}
                >
                  <Icon className="w-5 h-5" />
                  {!collapsed && <span>{label}</span>}
                </Button>
              </div>
            </Link>
          </TooltipTrigger>
          {collapsed && <TooltipContent side="right">{label}</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <>
    {/* Header */}
      <header
        className={`fixed top-0 h-16 bg-primary text-primary-foreground flex items-center justify-between px-4 shadow-md z-10
        transition-all duration-300 ease-in-out border-b rounded-b-xl ${
          collapsed ? "left-24 right-8" : "left-72 right-8"
        }`}
      >
        <button
          onClick={toggleCollapse}
          className="p-1 rounded-md transition-colors duration-200 cursor-pointer"
        >
          {collapsed ? (
            <ArrowBigRightDash className="w-6 h-6" />
          ) : (
            <ArrowBigLeftDash className="w-6 h-6" />
          )}
        </button>

        <div className="flex items-center gap-4">
          <Button
            className="p-2 hover:bg-muted rounded-full"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <img
              src={avatar}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium">John Doe</span>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`h-full bg-primary text-primary-foreground p-2 pt-4 flex flex-col justify-between
        transition-all duration-300 ease-in-out ${collapsed ? "w-16" : "w-64"}`}
      >
        <div className="space-y-2">
          <div className="flex items-center h-12 px-2">
            <img src={icon} alt="Logo" className="w-10 object-contain" />
            {!collapsed && (
              <span className="ml-3 text-lg font-bold text-primary-foreground">Planora</span>
            )}
          </div>

          {!collapsed && (
            <p className="text-sm font-semibold text-muted-foreground px-2 pt-2">
              Main
            </p>
          )}

          {navItems.slice(0, 5).map((item) => (
            <NavLink key={item.to} {...item} />
          ))}

          {!collapsed && (
            <p className="text-sm font-semibold text-muted-foreground px-2 pt-4">
              General
            </p>
          )}
          <NavLink {...navItems[5]} />
        </div>

        {/* Logout Button */}
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                onClick={handleLogout}
                className={`w-full flex items-center p-2 rounded-md transition-all ${
                  collapsed ? "justify-center" : "justify-start gap-2"
                } hover:bg-muted`}
              >
                <LogOut className="w-5 h-5" />
                {!collapsed && <span>Logout</span>}
              </Button>
            </TooltipTrigger>
            {collapsed && <TooltipContent side="right">Logout</TooltipContent>}
          </Tooltip>
        </TooltipProvider>
      </aside>
    </>
  );
};

export default Navbar;
