"use client"

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { ReloadIcon } from "@radix-ui/react-icons"
import React, { useState } from "react"
import { toast } from "react-hot-toast"

type Props = {}

const LoginPage = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false)

  const login = async () => {
    setLoading(true)
    try {
      await signIn("google")
      toast.success("Sign in successful")
    } catch (error) {
      console.log(error)
      toast.error("Something went")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full h-full mx-auto max-w-sm text-sm flex flex-col justify-center gap-5">
      <div className="flex flex-col items-center gap-10 p-5">
        <h2 className="text-2xl font-medium">Welcome Back!</h2>
        <Button onClick={login} disabled={loading}>
          {loading ? (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <svg
              viewBox="0 0 16 16"
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#4285F4"
                  d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                ></path>
                <path
                  fill="#34A853"
                  d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                ></path>
                <path
                  fill="#FBBC04"
                  d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                ></path>
              </g>
            </svg>
          )}
          Sign in with Google
        </Button>
      </div>
    </div>
  )
}

export default LoginPage
