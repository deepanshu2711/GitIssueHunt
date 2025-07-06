import {
  Home,
  Search,
  Bookmark,
  User,
  BookOpen,
  Settings,
} from "lucide-react";

export const menuGroups = [
  {
    label: "Main",
    items: [
      { title: "Home", url: "/", icon: Home },
      { title: "Discover Issues", url: "/discover", icon: Search },
    ],
  },
  {
    label: "Contribute",
    items: [
      { title: "Saved Issues", url: "/saved", icon: Bookmark },
      { title: "Resources", url: "/resources", icon: BookOpen },
    ],
  },
  {
    label: "Account",
    items: [
      { title: "Profile", url: "/profile", icon: User },
      { title: "Settings", url: "/settings", icon: Settings },
    ],
  },
];
