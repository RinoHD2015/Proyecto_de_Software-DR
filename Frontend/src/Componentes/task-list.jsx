"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const tasks = [
  { text: "Revisar pedidos pendientes" },
  { text: "Actualizar reporte diario de ventas" },
  { text: "Sincronizar base de datos" },
  { text: "Revisar registros de usuarios" },
  { text: "Limpiar datos antiguos" },
]

export function TaskList() {
  return (
    <RadioGroup defaultValue={tasks[0].text} className="space-y-3">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-3 bg-white/50 rounded-lg transition-all hover:bg-white/70"
        >
          <RadioGroupItem
            value={task.text}
            id={`task-${index}`}
            className="border-gray-400"
          />
          <label
            htmlFor={`task-${index}`}
            className="text-md text-gray-700 font-medium"
          >
            {task.text}
          </label>
        </div>
      ))}
    </RadioGroup>
  )
}
