import Image from "next/image";
import { Roles } from "@/generated/prisma";


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectUser } from "@/redux/slices/userSlice";

import { ChevronUp } from "lucide-react";

import { menuGroups } from "@/constants/sidebar";
import { signOut } from "next-auth/react";
import type { MenuGroup } from "@/constants/sidebar";

/*
  * Filters the menu groups based on the user's role.
  * If a group has no items after filtering, it will be removed.
  * If an item has no roles defined, it will be visible to all users.
  * If an item has roles defined, it will only be visible to users with a matching role.
 */
function filterMenuGroupsByRole(menuGroups: MenuGroup[], role?: Roles) {
  return menuGroups.map(group => ({
    ...group,
    items: group.items.filter(item => {
      // If item has no roles, anyone can view it
      if (!item.roles) return true;
      // If item has roles, only show if user has a matching role
      return role && item.roles.includes(role);
    })
  })).filter(group => group.items.length > 0); // Hiden groups with no items
}

export function AppSidebar() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleSignOut = async () => {
    dispatch(logout());
    await signOut({ callbackUrl: "/api/auth/signin" });
  };

  
  /* 
    * Filter menu groups based on user role
    * This will remove any groups or items that the user does not have access to
  */
  const filteredMenuGroups = filterMenuGroupsByRole(menuGroups, user?.role);

  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="flex flex-row w-full items-center gap-1 p-4">
        <Image src="/icon.png" height={41} width={40} alt="logo" />
        <p className="text-lg font-semibold">
          <span className="text-lime-499">G</span>itIssueHunt
        </p>
      </SidebarHeader>

      <SidebarContent>
        {filteredMenuGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-1">
                        <item.icon className="w-3 h-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar>
                    <AvatarImage src={user?.image as string} />
                    <AvatarFallback>{user?.name?.charAt(1)}</AvatarFallback>
                  </Avatar>
                  <p>{user?.name}</p>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top">
                <DropdownMenuItem onClick={handleSignOut}>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
