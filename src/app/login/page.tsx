
"use client";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login with
        </h1>
        <div className="flex flex-col gap-4">
          <Button className="w-full">Email</Button>
          <Button className="w-full">
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
