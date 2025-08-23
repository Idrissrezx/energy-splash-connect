import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  UserPlus,
  FileText,
  Newspaper,
  Share2,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
    description: "Overview & analytics"
  },
  {
    title: "Users & Roles",
    url: "/admin/users",
    icon: Users,
    description: "Manage user permissions"
  },
  {
    title: "Registrations",
    url: "/admin/registrations",
    icon: UserCheck,
    description: "Pending applications"
  },
  {
    title: "Coaches",
    url: "/admin/coaches",
    icon: UserPlus,
    description: "Staff management"
  },
  {
    title: "Pricing & Docs",
    url: "/admin/pricing",
    icon: FileText,
    description: "Plans & documents"
  },
  {
    title: "News",
    url: "/admin/news",
    icon: Newspaper,
    description: "Announcements"
  },
  {
    title: "Social Media",
    url: "/admin/social",
    icon: Share2,
    description: "Social platforms"
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
    description: "System configuration"
  },
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/admin") {
      return currentPath === "/admin";
    }
    return currentPath.startsWith(path);
  };

  const getNavClassName = (path: string) => {
    const baseClasses = "relative group transition-all duration-200 rounded-lg";
    if (isActive(path)) {
      return `${baseClasses} bg-primary/10 text-primary border border-primary/20 shadow-sm`;
    }
    return `${baseClasses} hover:bg-muted/50 hover:text-foreground text-muted-foreground`;
  };

  return (
    <Sidebar className={`border-r border-border/50 bg-card/50 backdrop-blur-sm ${collapsed ? "w-16" : "w-64"}`}>
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">EG</span>
              </div>
              <div>
                <h2 className="font-semibold text-sm text-foreground">Energy Guelma</h2>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            </motion.div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="h-8 w-8 p-0 hover:bg-muted/50"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </Button>
        </div>
      </div>

      <SidebarContent className="p-2">
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-3 mb-2">
              MAIN MENU
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink
                      to={item.url}
                      end={item.url === "/admin"}
                      className={getNavClassName(item.url)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 p-3 w-full"
                      >
                        <item.icon size={18} className="shrink-0" />
                        {!collapsed && (
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{item.title}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {item.description}
                            </p>
                          </div>
                        )}
                        {isActive(item.url) && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute left-0 top-0 w-1 h-full bg-primary rounded-r-full"
                          />
                        )}
                      </motion.div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut size={18} />
            {!collapsed && <span className="ml-3">Logout</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}