import {
  LayoutDashboard,
  FolderKanban,
  Users,
  FileText,
  PlusCircle,
} from "lucide-react";

export const NAV_ITEMS = {
  admin: [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "manage",
      title: "Manage",
      path: "/manage",
      icon: FolderKanban,
    },
    {
      id: "users",
      title: "Users",
      path: "/users",
      icon: Users,
    },
  ],
  recruiter: [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "jds",
      title: "JDs",
      path: "/jds",
      icon: FileText,
    },
    {
      id: "add",
      title: "Add",
      path: "/add",
      icon: PlusCircle,
    },
  ],
  teamLeader: [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "manage",
      title: "Manage",
      path: "/manage",
      icon: FolderKanban,
    },
  ],
  accountManager: [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "manage",
      title: "Manage",
      path: "/manage",
      icon: FolderKanban,
    },
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    }
    
  ],
};
