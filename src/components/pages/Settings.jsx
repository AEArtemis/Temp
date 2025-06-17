import React from "react"
import { useTheme } from "../Theme"

export const Settings = () => {
  const { primaryColor, setPrimaryColor } = useTheme()

  return (
    <div className="min-h-screen bg-background pt-20 px-4 space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
        <input
          type="color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
          className="w-16 h-10 border p-1 rounded"
        />
    </div>
  )
}
