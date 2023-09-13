"use client"

import { ChangeEventHandler, FormEvent, useState } from "react"
import { Button } from "./ui/button"
import axios from "axios"

const AddForm = () => {
  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (email.length > 5) {
      try {
        await axios.post("/api/friends/add", {
          email,
        })
      } catch (error: any) {
        setError(error?.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1 max-w-sm">
      <label htmlFor="email" className="text-2xl font-medium mb-5">
        Add a friend
      </label>
      <div className="flex items-center gap-2">
        <input
          name="email"
          type="email"
          placeholder="example@email.com"
          className="py-2 px-4 border border-black rounded-md"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Button className="w-max py-2 px-4">Add</Button>
      </div>
      {!!error.length && <p className="text-xs text-red-500 ml-2">{error}</p>}
    </form>
  )
}

export default AddForm
