import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { PageLoader } from "@/components/Loader"


export const AuthGaurdProvider = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/api/auth/signin')
    }
  }, [router, status])

  if (status === "loading") return <PageLoader />

  return <>{children}</>
}
