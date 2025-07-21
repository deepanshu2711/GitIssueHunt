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

/*
  * Represents a menu item in the sidebar.
  * Each item has a title, URL, icon, and optional roles that define visibility.
 */
export type MenuItem = {
  title: string;
  url: string;
  icon: any;
  roles?: Roles[];
};

/*
  * Represents a group of menu items in the sidebar.
  * Each group has a label and an array of items.
 */
export type MenuGroup = {
  label: string;
  items: MenuItem[];
};

export const menuGroups: MenuGroup[] = [
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
