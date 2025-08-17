"use client"

import React, { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"

export function DashboardCalendar() {
  const [date, setDate] = useState(undefined)

  useEffect(() => {
    // Evita el error de hidratación estableciendo la fecha solo en el cliente
    setDate(new Date())
  }, [])

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md"
      classNames={{
        months: "flex flex-col space-y-4",
        month: "space-y-4",
        caption_label: "font-headline",
        day: "rounded-full",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
      }}
    />
  )
}
