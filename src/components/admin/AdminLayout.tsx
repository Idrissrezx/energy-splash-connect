import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { AdminNavbar } from "./AdminNavbar";
import { motion } from "framer-motion";

export function AdminLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background via-background/95 to-muted/20">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminNavbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex-1 p-6 overflow-auto"
          >
            <Outlet />
          </motion.main>
        </div>
      </div>
    </SidebarProvider>
  );
}