import { Loader } from "lucide-react"

export const PageLoader = () => {
  return (
    <div className="flex min-h-screen  items-center justify-center bg-[#24292e] text-gray-100">
      <Loader className="animate-spin size-6" />
    </div>
  )
}
