"use client"

import { useState } from "react"

export function useActionState<T, U>(action: (formData: FormData) => Promise<T>) {
  const [state, setState] = useState<T | null>(null)
  const [isPending, setIsPending] = useState(false)

  const formAction = async (formData: FormData) => {
    setIsPending(true)
    try {
      const result = await action(formData)
      setState(result)
      return result
    } catch (error) {
      console.error("Action error:", error)
      throw error
    } finally {
      setIsPending(false)
    }
  }

  return [state, formAction, isPending] as const
}
