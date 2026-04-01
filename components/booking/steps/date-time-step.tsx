"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
]

interface DateTimeStepProps {
  selectedDate: Date | null
  selectedTime: string
  onDateSelect: (date: Date) => void
  onTimeSelect: (time: string) => void
}

export function DateTimeStep({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: DateTimeStepProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    return { daysInMonth, firstDayOfMonth }
  }

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentMonth)

  const isDateSelectable = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    // Selectable if it's today or later and not a Sunday (0)
    return date >= today && date.getDay() !== 0
  }

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    )
  }

  const handleDateClick = (day: number) => {
    if (isDateSelectable(day)) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      onDateSelect(date)
    }
  }

  const goToPreviousMonth = () => {
    const newMonth = new Date(currentMonth)
    newMonth.setMonth(newMonth.getMonth() - 1)
    const today = new Date()
    if (newMonth.getMonth() >= today.getMonth() || newMonth.getFullYear() > today.getFullYear()) {
      setCurrentMonth(newMonth)
    }
  }

  const goToNextMonth = () => {
    const newMonth = new Date(currentMonth)
    newMonth.setMonth(newMonth.getMonth() + 1)
    setCurrentMonth(newMonth)
  }

  const monthYear = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

  return (
    <div className="space-y-8">
      {/* Calendar */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Select Date</h3>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={goToPreviousMonth}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium min-w-[140px] text-center">{monthYear}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={goToNextMonth}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-xs text-muted-foreground py-2">
              {day}
            </div>
          ))}
          {[...Array(firstDayOfMonth)].map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1
            const selectable = isDateSelectable(day)
            const selected = isDateSelected(day)
            return (
              <button
                key={day}
                type="button"
                onClick={() => handleDateClick(day)}
                disabled={!selectable}
                className={cn(
                  "h-10 rounded-md text-sm font-medium transition-colors",
                  selectable
                    ? "hover:bg-primary/20 cursor-pointer"
                    : "text-muted-foreground/50 cursor-not-allowed",
                  selected && "bg-primary text-primary-foreground hover:bg-primary"
                )}
              >
                {day}
              </button>
            )
          })}
        </div>
      </div>

      {/* Time Slots */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Select Time</h3>
        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => onTimeSelect(time)}
              className={cn(
                "py-3 px-4 rounded-lg text-sm font-medium transition-colors border",
                selectedTime === time
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background/50 border-border/50 text-foreground hover:border-primary/50"
              )}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
