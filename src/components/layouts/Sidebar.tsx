import { BarChart3, ChevronDown, Droplet, LayoutDashboard, Settings, Users } from 'lucide-react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SubMenuItem {
  id: string;
  label: string;
  path: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: any;
  path?: string; // optional -> only submenu leaves have a path
  badge?: string;
  count?: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: "Dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
    badge: "New",
  },
  {
    id: "Analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "Overview", label: "Overview", path: "/analytics/overview" },
      { id: "Reports", label: "Reports", path: "/analytics/reports" },
      { id: "Insights", label: "Insights", path: "/analytics/insights" },
    ],
  },
  {
    id: "Users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "All-Users", label: "All Users", path: "/users/all" },
      { id: "Roles", label: "Roles & Permissions", path: "/users/roles" },
      { id: "Activity", label: "User Activity", path: "/users/activity" },
    ],
  },
  {
    id: "Settings",
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  onPageChange: (page: string) => void;
}

const Sidebar = ({ collapsed, onToggle, onPageChange}: SidebarProps) => {

  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState(new Set([""]));

  const toggleExpanded = (itemId: string) => {
    const updated = new Set(expandedItems);
  
    if (updated.has(itemId)) {
      updated.delete(itemId);
    } else {
      updated.add(itemId);
    }
  
    setExpandedItems(updated);
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className={`${collapsed ? "w-20" : "w-72"} transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col`}
    >
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Droplet className="w-6 h-6 text-white" />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Water Billing
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const hasSubmenu = !!item.submenu;
          const active = isActive(item.path);

          const ItemClasses = `
            w-full flex items-center justify-between p-3 rounded-xl transition-all
            ${active
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"}
          `;

          return (
            <div key={item.id}>
              {hasSubmenu ? (
                <button
                  className={ItemClasses}
                  onClick={() => toggleExpanded(item.id)}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    {!collapsed && <span>{item.label}</span>}
                  </div>
                  {!collapsed && <ChevronDown className="w-4 h-4" />}
                </button>
              ) : (
                <Link to={item.path!} className={ItemClasses} onClick={() => onPageChange(item.label)}>
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    {!collapsed && <span>{item.label}</span>}
                  </div>
                </Link>
              )}

              {/* Submenu list */}
              {!collapsed && hasSubmenu && expandedItems.has(item.id) && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu!.map((sub) => {
                    const subActive = isActive(sub.path);

                    return (
                      <Link
                      onClick={() => {
                        onPageChange(sub.label)
                      }}
                        key={sub.id}
                        to={sub.path}
                        className={`block p-2 text-sm rounded-lg transition-all 
                          ${
                            subActive
                              ? "text-blue-600 font-semibold dark:text-blue-400"
                              : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                          }
                        `}
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div>
        <h1>Profile Information</h1>
      </div>
    </div>
  );
}

export default Sidebar
