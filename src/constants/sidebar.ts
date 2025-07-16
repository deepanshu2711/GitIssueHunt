import { Roles } from "@/generated/prisma";
import {
  Home,
  Search,
  Bookmark,
  User,
  BookOpen,
  Settings,
  LayoutDashboard,
  Users,
} from "lucide-react";

export const menuGroups = [
  {
    label: "Main",
    items: [
      { title: "Home", url: "/", icon: Home },
      { title: "Discover Issues", url: "/discover", icon: Search },
      { title: "Saved Issues", url: "/saved", icon: Bookmark },
      { title: "Resources", url: "/resources", icon: BookOpen },
      { title: "Profile", url: "/profile", icon: User },
      { title: "Settings", url: "/settings", icon: Settings },
    ],
  },
  {
    label: "Admin",
    items: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: LayoutDashboard,
        roles: [Roles.superadmin, Roles.admin],
      },
      {
        title: "Users",
        url: "/admin/users",
        icon: Users,
        roles: [Roles.admin, Roles.superadmin],
      },
    ],
  },
];
