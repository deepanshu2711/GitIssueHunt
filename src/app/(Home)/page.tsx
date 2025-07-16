"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetIssues } from "@/hooks/queries/useGetIssues";
import Image from "next/image";
import Link from "next/link";

import { PageLoader } from "@/components/Loader";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/slices/userSlice";
import { Select } from "@radix-ui/react-select";
import { useState } from "react";

type Label = {
  id: number;
  name: string;
  color: string;
};

type Issue = {
  title: string;
  body: string;
  html_url: string;
  labels: Label[];
  user: { avatar_url: string };
  repository_url: string;
};

type GitHubIssuesResponse = {
  total_count: number;
  items: Issue[];
};

type Option = {
  value: string;
  label: string;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState("javascript");
  const [label, setLabel] = useState("good first issue");
  const user = useAppSelector(selectUser);

  console.log("User:", user);

  const options: Option[] = [
    { value: "good first issue", label: "Good first issue" },
    { value: "help wanted", label: "Help wanted" },
    { value: "bug", label: "Bug" },
    { value: "enhancement", label: "Enhancement" },
    { value: "documentation", label: "Documentation" },
    { value: "feature request", label: "Feature Request" },
  ];

  const { data, isLoading } = useGetIssues(page, lang, label) as {
    data: GitHubIssuesResponse;
    isLoading: boolean;
  };

  const totalPages = Math.ceil(data?.total_count / 30);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    Math.max(0, page - 3),
    page + 5,
  );

  if (isLoading) return <PageLoader />;

  return (
    <div className="mt-9 flex flex-col gap-4 ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-gray-800 text-xl font-semibold">Issues</p>
          <p className="text-gray-800 text-sm font-semibold">
            {data.total_count.toLocaleString()} results
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Select value={label} onValueChange={(value) => setLabel(value)}>
            <SelectTrigger className="w-[250px] text-gray-800 font-semibold">
              <SelectValue placeholder="Select label" />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={lang} onValueChange={(value) => setLang(value)}>
            <SelectTrigger className="w-[180px] text-gray-800 font-semibold">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="go">Go</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-3 flex-col flex gap-4 mb-8">
        {data.items.map((item: Issue, idx: number) => (
          <Card
            key={idx}
            className="border-[1px]  text-gray-800  transition-all"
          >
            <CardContent className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <Image
                  src={item.user.avatar_url}
                  height={26}
                  width={25}
                  className="rounded-full"
                  alt="user avatar"
                />
                <Link
                  href={`https://github.com/${item.repository_url
                    .split("/")
                    .slice(-2)
                    .join("/")}`}
                  target="_blank"
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {item.repository_url.split("/").slice(-2).join("/")}
                </Link>
              </div>
              <Link
                href={item.html_url}
                target="_blank"
                className="hover:text-blue-500 line-clamp-1 font-semibold cursor-pointer"
              >
                {item.title}
              </Link>
              <p className="line-clamp-1 text-sm">{item.body}</p>
              <div className="flex items-center gap-1 mt-2">
                {item.labels.map((label: Label, idx: number) => (
                  <Badge
                    key={idx}
                    style={{ backgroundColor: `#${label.color}` }}
                  >
                    {label.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pagination className="text-gray-300">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault();
                if (page > 1) setPage((p) => p - 1);
              }}
            />
          </PaginationItem>

          {pageNumbers.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                isActive={p === page}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(p);
                }}
                className={`${page === p ? "bg-green-900" : ""} rounded-md`}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (page < totalPages) setPage((p) => p + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
