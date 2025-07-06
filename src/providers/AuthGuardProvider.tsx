"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { PageLoader } from "@/components/Loader"
import { useAppDispatch } from "@/redux/hooks"
import { login } from "@/redux/slices/userSlice"
import { User } from "@/generated/prisma"

interface AuthGuardProviderProps {
  children: React.ReactNode
}

export const AuthGuardProvider = ({ children }: AuthGuardProviderProps) => {
  const { data: session, status } = useSession()
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin")
      return
    }

    if (status === "authenticated" && session?.user) {
      dispatch(login(session.user as User))
    }
  }, [status, session, dispatch, router])

  if (status === "loading") return <PageLoader />

  return <>{children}</>
}

