"use client";

import { useGetAllUsers } from "@/hooks/queries/user/useGetAllUsers";
import { PageLoader } from "@/components/Loader";
import { PageHeader } from "@/components/PageHeader";

import { UserTable } from "./UserTable";
import { userColumns } from "./columns";

export const UserPanel = () => {
  const { data, isLoading, error } = useGetAllUsers();

  if (isLoading) return <PageLoader />;
  if (error || !data) return null;

  return (
    <div className="flex flex-col  gap-10">
      <PageHeader title={"User Panel"} />
      <UserTable columns={userColumns} data={data} />
    </div>
  );
};
