import { Loader } from "lucide-react";

export const PageLoader = () => {
  return (
    <div className="flex min-h-screen  items-center justify-center text-gray-799">
      <Loader className="animate-spin size-6" />
    </div>
  );
};
