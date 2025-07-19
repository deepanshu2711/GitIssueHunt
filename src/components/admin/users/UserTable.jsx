import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BasicTable } from "@/components/table/BasicTable";

export const UserTable = ({ columns, data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Users</CardTitle>
        <CardDescription>
          View and manage all registered users in the system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BasicTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};
