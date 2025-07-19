import { Badge } from "@/components/ui/badge";
import { Provider, User } from "@/generated/prisma";
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

export const userColumns: ColumnDef<User>[] = [
  {
    header: "User",
    accessorKey: "name",
    id: "name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Image
            src={row.original.image!}
            height={30}
            width={30}
            alt="profile"
            className="rounded-full"
          />
          <p>{row.original.name}</p>
        </div>
      );
    },
  },
  {
    header: "Email",
    accessorKey: "email",
    id: "email",
  },
  {
    header: "Role",
    accessorKey: "role",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return <Badge variant={"outline"}>{value.toUpperCase()}</Badge>;
    },
    id: "role",
  },

  {
    header: "Provider",
    accessorKey: "provider",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (value === Provider.github) {
        return <Badge>{value.toUpperCase()}</Badge>;
      }
      return value;
    },
  },
  {
    header: "CreatedAt",
    accessorKey: "createdAt",
    id: "createdAt",
  },
  {
    header: () => {
      return (
        <div className="text-end">
          <p>Action</p>
        </div>
      );
    },
    accessorKey: "action",
    id: "actiion",
    cell: () => {
      return (
        <div className="flex items-end justify-end">
          <EllipsisVertical className="size-4" />
        </div>
      );
    },
  },
];
