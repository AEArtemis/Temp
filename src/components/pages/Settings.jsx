import React from "react"
import { useTheme } from "../Theme"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const Settings = () => {
  const { primaryColor, setPrimaryColor } = useTheme()

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
        <div className="flex gap-2"></div>
      </div>
      <Input
        type="color"
        value={primaryColor}
        onChange={(e) => setPrimaryColor(e.target.value)}
        className="w-16 h-10 border rounded"
      />
      <Button
        className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--primary-foreground)] px-4 py-2 border rounded cursor-pointer"
      >
        Primary Button
      </Button>

      <Button
        className="bg-white hover:bg-gray-300 px-4 py-2 border text-black rounded focus:outline-none cursor-pointer"
      >
        Default Button
      </Button>
    </div>
  )
}
