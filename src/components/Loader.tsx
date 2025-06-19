import { Loader } from "lucide-react"

export const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader className="animate-spin text-gray-300 siz-10" />
    </div>
  )
}
