import React from 'react'

export const Calendar = () => {
  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-2xl font-semibold text-foreground">Calendar</h1>
            <div className="flex gap-2">
            </div>
        </div>
    </div>
  )
}
