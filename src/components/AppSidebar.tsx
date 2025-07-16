import Image from "next/image";

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

export function AppSidebar() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleSignOut = async () => {
    dispatch(logout());
    await signOut({ callbackUrl: "/api/auth/signin" });
  };

  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="flex flex-row w-full items-center gap-1 p-4">
        <Image src="/icon.png" height={41} width={40} alt="logo" />
        <p className="text-lg font-semibold">
          <span className="text-lime-499">G</span>itIssueHunt
        </p>
      </SidebarHeader>

      <SidebarContent>
        {menuGroups.map((group) => (
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
